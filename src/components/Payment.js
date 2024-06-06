import React, { useState } from 'react';
import header from "./Header"
const MyComponent = () => {
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    // Toggle the image visibility
    setShowImage(!showImage);
  };

  return (
   
    <div>
      <button onClick={handleButtonClick}>Toggle Image</button>
      {showImage && (
        <img
          src="C:\Users\Annss\OneDrive\Documents\FlavorHub\public\images" // Replace with the actual image URL or path
          alt="Image description"
        />
      )}
    </div>
  );
};

export default MyComponent;