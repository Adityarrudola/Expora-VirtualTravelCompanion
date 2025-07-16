import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from 'react-oidc-context';

const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_E2aS3NbiP",
  client_id: "80ckih8pobll4gif95u35ve4v",
  redirect_uri: "http://localhost:5173/",
  post_logout_redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "email openid phone",
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
        <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
