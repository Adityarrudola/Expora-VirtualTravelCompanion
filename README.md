# 🌍 Expora – A Virtual Travel Companion

**Expora** is a cloud-native travel platform that offers immersive **360° virtual tours** of famous destinations worldwide. The platform integrates rich imagery, interactive street views, and engaging trivia using modern web technologies and scalable cloud infrastructure.

---
# Flow - Diagram
<img width="1094" height="570" alt="image" src="https://github.com/user-attachments/assets/9aea46a0-edc4-4ec9-9892-ea78fd072b83" />


# Demo
<img width="1920" height="987" alt="sScreenshot (132)" src="https://github.com/user-attachments/assets/80605f9e-3976-47cc-97e4-7c9ea9437c71" />
<img width="1919" height="816" alt="image" src="https://github.com/user-attachments/assets/9e83910c-322e-4c05-8e77-95aa2fe16318" />
<img width="1919" height="905" alt="image" src="https://github.com/user-attachments/assets/c7a8c0d2-e492-4ac6-8244-9eb97d77af60" />

# 🎥 Video Demo
🔗 [Click here to watch the video](https://drive.google.com/file/d/1EHNigw9Rwrrsr8RFlzrl6kS6SbEEzbO9/view?usp=drive_link)


---

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
