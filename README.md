# JWT Authentication API

This is a simple Node.js API project demonstrating JWT (JSON Web Token) authentication. JWT authentication is commonly used for securing web applications by providing a token-based authentication mechanism. This README provides an overview of the code and its usage.

## Prerequisites

Before you can run this project, make sure you have the following installed:

- **Node.js**

- **npm (Node Package Manager)**


## Usage

1. **Starting the API**: To start the API, run the following command:
    ```
    npm start
    ```

    The API will be accessible at http://localhost:5000.
#

### Endpoints
**GET /**
    
- A simple endpoint to check if the API is running.

**POST /login**
    
- This endpoint allows a user to log in and receive a JWT token in response.

**POST /profile**

- This protected endpoint requires a valid JWT token in the Authorization header. If a valid token is provided, it grants access to the user's profile information.

## Setup

1. Clone this repository to your local machine:

   ```shell
   https://github.com/PyDeveloperAniket/JWT-Authentication.git

2. Navigate to the project directory:

   ```shell
   cd jwt-authentication-api

3. Install the required dependencies:

   ```shell
   npm install

4. Create a .env file in the project root and configure it with your environment variables:

   ```shell
   PORT=5000
   SECRETKEY='your-secret-key'
#


## Usage

1. **Starting the API**: To start the API, run the following command:
    ```
    npm start
    ```

    The API will be accessible at http://localhost:5000.
#

## Example Requests

**Logging in and Receiving a Token**

```
curl -X POST http://localhost:5000/login
```

**Response:**

```
{
  "token": "your-generated-jwt-token"
}

```

**Accessing a Protected Route (Profile)**

- Make a request to the /profile endpoint with the JWT token:

```
curl -X POST http://localhost:5000/profile -H "Authorization: Bearer your-generated-jwt-token"
```

**Response:**

```
{
  "message": "Profile Access",
  "authData": {
    "user": {
      "id": 1,
      "uername": "Uer_Name",
      "email": "sample@gmail.com"
    },
    "iat": timestamp,
    "exp": timestamp
  }
}

```

**Token Verification**

The verifyToken middleware is used to verify the JWT token. It checks for the presence of the token in the Authorization header and verifies it using the SECRETKEY from the environment variables.
#

## Aniket Wandile 

*follow for more :*  **https://aniketwandile.tech**
