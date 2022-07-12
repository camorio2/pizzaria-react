import React, { useContext } from "react";
import "../../components/conponents.css";
import { LogosSeguindo } from "../../components/logos/favorites/logo-favorite";
import { RecipeCard } from "../../components/RecipeCard";
import { useState, useEffect } from "react";
import Api from "../../Api";
import { UserContext } from "../../contexts/UserContext";
import firebase from "firebase/app";
import "firebase/auth";

export const Seguindo = () => {
  const { user } = useContext(UserContext);
  const [recipesFavorite, setRecipesFavorite] = useState([]);
  useEffect(async () => {
    const currentUser = firebase.auth().currentUser;
    const result = await Api.listFavoriteRecipes(user?.id || currentUser?.uid);
    setRecipesFavorite(result);
  }, []);
  console.log("recipesFavorite", recipesFavorite);
  return (
    <div className="tela">
      <LogosSeguindo />
      <h3 className="h3">Esta aqui é a pagina de favorites</h3>
      <div id="carts" className="carts">
        {recipesFavorite.map((item) => {
          return <RecipeCard key={item.title} recipe={item} />;
        })}
      </div>
      <h2 className="fim">Parece que você chegou ao fim</h2>
    </div>
  );
};
