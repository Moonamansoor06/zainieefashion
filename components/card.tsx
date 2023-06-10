import React, { useState } from 'react';

const Card = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { Product_name, Image, Price, Description, variants } = product;
  const imageUrl = Image?.asset?._ref || '';

  const imageParts = imageUrl.split('/').pop()?.split('-') || []; // Extracts the image parts from the URL
  const imageId = imageParts[1]; // Extracts the image ID from the parts
  const dimensions = imageParts[2]?.replace('-jpg', '') || ''; // Extracts the dimensions and removes the "-jpg" suffix

  const finalImageUrl = imageId && dimensions
    ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${imageId}-${dimensions}.jpg`
    : '';
console.log("final uri",finalImageUrl)
  return (
    <div
      className={`bg-white p-4 shadow rounded transition-transform ${
        isHovered ? 'transform scale-105' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-4">
        {finalImageUrl && (
          <img src={finalImageUrl} alt={Product_name} className="w-full h-200" />
        )}
      </div>
      <h3 className="text-xl font-semibold">{Product_name}</h3>
      <p className="text-gray-600 mb-2">{Price}</p>
      {isHovered && (
        <div>
          <p>{Description}</p>
          <ul>
            {variants.map((variant, index) => (
              <li key={index}>
                Size: {variant.size}, Color: {variant.color}, Quantity: {variant.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
