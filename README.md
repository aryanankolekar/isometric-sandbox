# Isometric Pattern Generator

This project is a web-based application that allows users to create and interact with isometric patterns. It's built with React and Three.js, providing a dynamic 3D environment where users can generate visually interesting designs. The application is designed to be intuitive and can serve as a tool for designers, a relaxing visual experience, or a demonstration of 3D graphics in the browser.

## Features

*   **Interactive Grid:** Click on cubes in the grid to toggle their visibility, allowing for the creation of custom patterns.
*   **Color Palette Customization:** Cycle through a selection of predefined pastel color palettes to change the look and feel of the generated patterns.
*   **View Controls:**
    *   **Reset View:** Return the camera to its default position and zoom.
    *   **Pan:** Use the middle mouse button to pan the camera across the scene.
    *   **Zoom:** Use the mouse wheel to zoom in and out.
*   **Grid Manipulation:**
    *   **Clear Grid:** Remove all cubes from the grid.
    *   **Randomize Grid:** Populate the grid with a random pattern of cubes.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Three.js:** A 3D graphics library for creating and displaying animated 3D computer graphics in a web browser.
*   **@react-three/fiber:** A React renderer for Three.js.
*   **@react-three/drei:** A collection of useful helpers and abstractions for @react-three/fiber.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Vite:** A fast build tool and development server for modern web projects.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm (or yarn) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/isometric-generator.git
    cd isometric-generator
    ```
2.  **Install NPM packages:**
    ```bash
    npm install
    ```
    or if you use yarn:
    ```bash
    yarn install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the port specified in your console).

## How to Use

*   **Toolbar (Top-Left):**
    *   **Reset View:** Click this button to reset the camera to its initial position and zoom level.
    *   **Clear Grid:** Click to remove all cubes from the scene.
    *   **Randomize:** Click to generate a new random pattern of cubes on the grid.
    *   **Change Colors:** Click to cycle through the available color palettes.
*   **Mouse Controls:**
    *   **Left-Click on a Cube:** Toggles the visibility of that cube.
    *   **Middle Mouse Button + Drag:** Pans the camera.
    *   **Mouse Wheel:** Zooms the camera in or out.

## Project Structure (Brief Overview)

```
isometric-generator/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components (Grid, IsoCube, Toolbar)
│   ├── scenes/           # Main 3D scene setup (IsoScene)
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point of the React application
│   └── index.css         # Global styles and Tailwind CSS setup
├── package.json          # Project metadata and dependencies
└── README.md             # This file
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request


