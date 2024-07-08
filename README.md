

This repository contains a web page application and a backend API, both containerized using Docker Compose for easy setup and deployment.

## Prerequisites

Make sure you have Docker and Docker Compose installed on your machine.

## Getting Started

Follow these steps to get the application up and running:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <project-folder>
   
2. Run the backend API and React Native app through Docker Compose:

    Build and start the containers using Docker Compose:

     ```bash
    docker-compose up --build

## Access API Documentation (Swagger):

  Once the containers are running, you can access the API documentation through Swagger OpenAPI at:

  http://localhost:8000/api
## Running the Web Page App 
  http://localhost:3000

## Running the React Native Mobile App
please change baseURL from utils/api.js to your ip4 to show the result on your connected mobile phone with expo
  **navigate to the mobile-reactNative folder:**
    ```bash
    cd mobile-reactNative
    npm install   # Install dependencies if not already installed
    npm start

    This will start the Metro Bundler for your React Native app. Use the Expo Go app on your mobile device (iOS/Android) to scan the QR code displayed in the terminal.

## Directory Structure
  `backend-NestJS/`: Backend API code.
  `front-NextJS`: Frontend code
  `mobile-reactNative/`: React Native mobile app code.

## Additional Notes
  - Make sure ports 8000 (API) and necessary ports for Frontend (NextJS) 3000 and Mobile (React Native) development are not occupied by other services on your machine.
  - Adjust Dockerfile and Docker Compose configurations as needed for specific requirements or environments.
  
    
