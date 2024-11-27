import React from "react";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="py-8 text-center bg-gray-500 shadow-md">
        <h1 className="text-4xl font-bold text-yellow-500">
          Ym Gallery
        </h1>
      </header>
      <div className="flex-1 p-6 bg-gray-100">
        <main className="bg-white mx-4 sm:mx-8 lg:mx-16 p-3 rounded-lg shadow">
          <Gallery />
        </main>
      </div>

      <footer className="py-4 text-center font-bold bg-gray-500 text-white">
        © {new Date().getFullYear()} Ym Gallery
      </footer>
    </div>
  );
}

export default App;
