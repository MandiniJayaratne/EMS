import React from "react";
import "../Home.css";
import imgf1 from "../assets/imgf1.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: "purple",
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          flexDirection: "row", // Ensure row layout (horizontal)
          // Space out text and image
          alignItems: "center", // Vertically center the content
          padding: "20px", // Optional padding
        }}
      >
        {/* Left side with text */}
        <div
          style={{
            flex: 1,
            color: "white",
            textAlign: "left",
            paddingLeft: "300px",
            paddingBottom: "300px",
            paddingRight: "200px",
          }}
        >
          <h1></h1>
          <p style={{ color: "yellow", fontSize: "35px" }}>
            Employee Managment System
          </p>
        </div>

        {/* Right side with image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "200px",
            paddingBottom: "150px",
          }}
        >
          <img
            src={imgf1} // Replace with your image URL
            alt="Right side"
            style={{
              maxWidth: "500%", // Ensure the image scales properly
              height: "auto", // Maintain aspect ratio
              objectFit: "cover", // Ensure the image fits well
              borderRadius: "10px", // Optional: add rounded corners
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
