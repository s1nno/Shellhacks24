import React, { useState } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="image-uploader">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button className="upload-button">Upload Image</button>
      <div className="image-preview">
        {image && <img src={image} alt="Uploaded Preview" />}
      </div>
    </div>
  );
};

export default App;
