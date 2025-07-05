import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ name, image }) => {
  return (
    <div className="category-card">
      <img src={image} alt={name} className="category-image" />
      <h3 className="category-name">{name}</h3>
    </div>
  );
};

export default CategoryCard;
