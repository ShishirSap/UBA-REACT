# React App with Vite

This is a React application built with Vite and Dockerized for easy deployment. You can run this application using Docker or directly on your machine.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/get-started) (optional, for Docker users)

## Getting Started

Follow the instructions below to run the application either with Docker or without it.

### Running without Docker

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the application, and you should see output indicating the development server is running. By default, the application runs on port `5173`.

4. **Access the application:**

    Open your web browser and navigate to `http://localhost:5173` to view the app.

### Running with Docker

1. **Build the Docker image:**

    ```bash
    docker build -t react-vite-app .
    ```

2. **Run the Docker container:**

    ```bash
    docker run -p 5173:5173 react-vite-app
    ```

    This command will run the Docker container and expose it on port `5173`.

3. **Access the application:**

    Open your web browser and navigate to `http://localhost:5173` to view the app running inside Docker.

## Available Scripts

In the project directory, you can run the following scripts:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Serves the production build locally.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
