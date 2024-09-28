import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));

    const formData = new FormData();
    formData.append("image", selectedFile); // Changed "file" to "image" if the API expects "image"

    const API_KEY = "eTSx+5lLmEue4NtwFy94kA==PZoNZg2tNqldND79";
    const API_URL = "https://api.api-ninjas.com/v1/imagetotext";

    axios
      .post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-Api-Key": API_KEY, // Use 'X-Api-Key' instead of 'Authorization'
        },
      })
      .then((response) => {
        console.log(response.data); // Log the response data to see its structure
        if (response.data && Array.isArray(response.data)) {
          const allText = response.data.map((item) => item.text).join(" ");
          setText(allText);
        } else {
          setText("No text found in the image.");
        }
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
          setText(
            "Error: " +
              (error.response.data.message ||
                "An error occurred while processing the image.")
          );
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Request data:", error.request);
          setText("Error: No response received from the server.");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message:", error.message);
          setText("Error: " + error.message);
        }
      });
  };

  return (
    <div className="App">
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      {file && <img src={file} alt="Uploaded preview" />}
      <h3>Extracted Text:</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;
