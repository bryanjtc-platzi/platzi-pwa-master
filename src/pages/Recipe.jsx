import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import mealdb from "../mealdb-api";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeInstructions from "../components/RecipeInstructions";

const Recipe = (props) => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const recipeId = params.recipeId;

  useEffect(async () => {
    try {
      const response = await mealdb.getRecipe(recipeId);
      setRecipe(response);
    } catch (e) {
      setRecipe(null);
    }
    setIsLoading(false);
  }, []);

  const compartir = (e) => {
    e.preventDefault();
    if (!navigator.share) {
      alert("Tu browser no soporta la Web Share API");
      return;
    }

    navigator
      .share({
        title: `${recipe.name}`,
        url: document.location.href,
      })
      .then(() => alert("Contenido compartido!"))
      .catch((error) => {
        alert("Hubo un error");
        console.log("Error sharing ", error);
      });
  };

  return (
    (isLoading && <div className="message">Cargando...</div>) ||
    (recipe === null && <div className="message">Hubo un problema :</div>) || (
      <div className="Recipe">
        <Helmet>
          <title>{recipe.name}</title>
        </Helmet>

        <div
          className="hero"
          style={{ backgroundImage: `url(${recipe.thumbnail})` }}
        />

        <div className="title">
          <div className="info">
            <h1>{recipe.name}</h1>
            <p>{recipe.origin}</p>
          </div>
          <div>
            <a onClick={compartir}>Compartir</a>
          </div>
        </div>

        <RecipeIngredients ingredients={recipe.ingredients} />

        <RecipeInstructions instructions={recipe.instructions} />
      </div>
    )
  );
};

export default Recipe;
