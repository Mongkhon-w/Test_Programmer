import React from 'react';

export interface RecipeProps {
  id: number;
  title: string;
  time: string;
  servings: number;
  img: string;
  description: string;
}

export default function RecipeCard({ recipe }: { recipe: RecipeProps }) {
  return (
    <div className="recipe-card">
      <img src={recipe.img} alt={recipe.title} className="recipe-image" />
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-meta">⏱ {recipe.time} | 🍽 {recipe.servings} ที่</p>
        <p className="recipe-description" style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>{recipe.description}</p>
      </div>
    </div>
  );
}
