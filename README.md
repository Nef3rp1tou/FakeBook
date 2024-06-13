# მაჭანკალი - Social Networking Platform

მაჭანკალი is a social networking platform inspired by Facebook, developed with Angular 12 for the frontend and .NET 8 for the backend. It enables users to create profiles, connect with friends, share posts, and exchange messages.

## Key Features

- User registration and authentication (JWT-based)
- User profiles with photo uploads
- Image gallery using ngx-gallery
- Toast notifications with ngx-toastr
- Loading spinner using ngx-spinner

## Technologies Used

### Frontend

- Angular 12.2.17
- Bootstrap 4
- ngx-bootstrap 7.1.0
- ngx-gallery 1.2.3
- ngx-spinner 10.0.1
- ngx-toastr 13.2.1

### Backend

- .NET 8
- Entity Framework Core 8.0.5
- SQLite
- AutoMapper.Extensions.Microsoft.DependencyInjection 12.0.1
- CloudinaryDotNet 1.26.2 (for image uploads)
- Swashbuckle.AspNetCore 6.6.2 (for Swagger UI)
- System.IdentityModel.Tokens.Jwt 7.5.2

## Project Structure


- FakeBook/
- ├── API/             # .NET Web API project
- │   ├── Controllers/
- │   ├── Data/
- │   ├── DTOs/
- │   ├── Entities/
- │   ├── Extensions/
- │   ├── Helpers/
- │    ├── Interfaces/
- │   ├── Middleware/
- │   ├── Migrations/
- │   ├── obj/
- │   ├── Properties/
- │   └── Services/
- ├── client/          # Angular frontend project
- │   ├── dist/
- │   ├── node_modules/
- │   └── src/
- │       ├── app/
- │       ├── assets/
- │       ├── environments/
- │       ├── ...
- ├── .gitignore
- ├── README.md
- ├── FakeBook.sln
- ├── package-lock.json
- ├── package.json
- └── ...
## Installation Instructions

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v16 or lower, LTS version recommended)
- npm (Node Package Manager): Included with Node.js

### Backend Setup

1.  Open a terminal or command prompt and navigate to the `API` directory.
2.  Restore NuGet packages:
    ```bash
    dotnet restore
    ```
3.  Apply database migrations:
    ```bash
    dotnet ef database update
    ```
4.  Run the API:
    ```bash
    dotnet run
    ```
    The API will be accessible at `https://localhost:5001`.

### Frontend Setup

1.  Open a terminal or command prompt and navigate to the `client` directory.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm start
    ```
    The Angular application will be accessible at `http://localhost:4200`.

## Usage

1. Launch the .NET API by following the Backend Setup instructions.
2. Start the Angular development server by following the Frontend Setup instructions.
3. Open your web browser and navigate to `http://localhost:4200` to access the FakeBook application.

## Contributing

Contributions and issue reports are welcome! Please follow the contribution guidelines outlined in the project.

## Additional Notes

*   This project is actively developed.
*   Cloudinary is used for image uploads (ensure you have the necessary configuration).
*   Make sure your CORS settings allow communication between your Angular frontend and .NET backend.
*   Adjust the API base URL in your Angular environment file (`environment.ts`) as needed.