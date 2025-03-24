import React, { useState } from "react";
import "./App.css";

const images = [
  { url: "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1529419412599-7bb870e11810?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const Slider = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const prevHandler = () => {
    setCurrIndex((prevIndex) => (prevIndex === 0 ? images.length - 3 : prevIndex - 3));
  };

  const nextHandler = () => {
    setCurrIndex((prevIndex) => (prevIndex + 3 >= images.length ? 0 : prevIndex + 3));
  };

  return (
    <div className="slider-container">
      <button onClick={prevHandler} className="slider-btn">❮</button>
      <div className="image-container">
        {images.slice(currIndex, currIndex + 3).map((img, idx) => (
          <img key={idx} src={img.url} alt={`Slide ${idx}`} className="slider-image" />
        ))}
      </div>
      <button onClick={nextHandler} className="slider-btn">❯</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Responsive Page</h1>
      </header>
      <section className="section">
        <h2>Section 1</h2>
        <Slider />
      </section>
      <section className="section">
        <h2>Static Content</h2>
        <p>This is a static content section.</p>
      </section>
      <section className="section">
        <h2>Section 3</h2>
        <Slider />
      </section>
      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default App;
