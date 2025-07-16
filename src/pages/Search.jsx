import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";

const API_BASE = "https://y8ea60zru6.execute-api.ap-south-1.amazonaws.com";

export default function Search() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [place, setPlace] = useState(null);
  const navigate = useNavigate();
  const auth = useAuth();

  const fetchPlace = async () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    setLoading(true);
    setError("");
    setPlace(null);

    try {
      const res = await fetch(`${API_BASE}/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ place_name: trimmedQuery }),
      });

      if (!res.ok) throw new Error("Place not found. Please try another name.");

      const data = await res.json(); // name, imgurl, details, view360
      setPlace(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 py-20 bg-gray-900 text-white px-4">
      <h2 className="text-4xl font-bold">Search a Destination</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPlace();
        }}
        className="flex gap-2"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. Taj Mahal"
          className="px-4 py-3 rounded-lg text-black w-72 outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg text-white font-semibold disabled:opacity-50"
        >
          {loading ? "Searching…" : "Search"}
        </button>
      </form>

      {error && <p className="text-red-400">{error}</p>}

 
      {place && (
        <div className="text-center space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] md:w-[500px]">
          <h3 className="text-2xl font-semibold">{place.name}</h3>
          <img
            src={place.imgurl}
            alt={place.name || "Place Thumbnail"}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="flex justify-center gap-6 pt-4">
            <button
              onClick={() =>
                auth.isAuthenticated
                  ? navigate(`/tour/${encodeURIComponent(place.name)}`, {
                      state: place,
                    })
                  : auth.signinRedirect()
              }
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                auth.isAuthenticated
                  ? "bg-cyan-500 hover:bg-cyan-600"
                  : "bg-gray-600 hover:bg-gray-700"
              }`}
            >
              {auth.isAuthenticated ? "View 360° Tour" : "Sign in to View Tour"}
            </button>

            <button
              onClick={() => alert(place.details)}
              className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg"
            >
              View Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
