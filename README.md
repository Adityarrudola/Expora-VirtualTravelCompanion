# 🌍 Expora – A Virtual Travel Companion

**Expora** is a cloud-native travel platform that offers immersive **360° virtual tours** of famous destinations worldwide. The platform integrates rich imagery, interactive street views, and engaging trivia using modern web technologies and scalable cloud infrastructure.

---
# Flow - Diagram
<img width="1556" height="805" alt="image" src="https://github.com/user-attachments/assets/68e02e94-d632-473d-b950-883c77cea8dc" />



--

## 🚀 Features

- 🔎 **Search Any Destination**: Instantly get a 360° view, brief description, and thumbnail.
- 🌐 **Panoramic Virtual Tours**: Powered by **Panolens.js** and Google Street View.
- 🔐 **Secure Authentication**: Login/signup using **AWS Cognito** and managed via React Context.
- ☁️ **Fully Cloud-Native Deployment** with CI/CD-ready structure.

---

## ☁️ Cloud Architecture

### ✅ Cloud Services Used

| Service              | Purpose                                                                 |
|----------------------|--------------------------------------------------------------------------|
| **EC2 + Nginx + PM2**| Hosts the frontend React app with HTTPS via **Let’s Encrypt**.          |
| **AWS Lambda**       | Serverless backend that handles search and data retrieval.              |
| **API Gateway**      | RESTful API interface for frontend to call Lambda.                      |
| **AWS Cognito**      | Secure user authentication and session token handling.                  |
| **React Context API**| Persistent auth state and routing control in frontend.                  |
| **Amazon S3**        | Static asset storage (e.g., images, icons) with restricted access.      |
| **DynamoDB**         | Optional (or future) use for storing user history or analytics.         |
| **Route 53 + Namecheap** | DNS routing with custom domain management.                     |

---

## 🛠️ Tech Stack

| Frontend        | Backend        | Cloud & Infra           |
|-----------------|----------------|----------------------------|
| React.js        | AWS Lambda     | AWS EC2, Route 53          |
| Panolens.js     | Python         | API Gateway, Cognito       |
| Unsplash API    | Node.js (tools)| S3, Nginx, PM2, Certbot    |
| Domain          |                | Namecheap (Domain), Route53|

---
