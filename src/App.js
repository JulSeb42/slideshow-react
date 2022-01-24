// Packages
import React from "react"

// Components
import SlideshowContainer from "./components/SlideshowContainer"

// Data
const images = [
    "/images/slide-1.jpg",
    "/images/slide-2.jpg",
    "/images/slide-3.jpg",
    "/images/slide-4.jpg",
    "/images/slide-5.jpg",
]

function App() {
    return (
        <div className="App">
            <SlideshowContainer items={images} />
        </div>
    )
}

export default App
