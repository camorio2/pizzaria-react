import React from "react"
import '../../components/conponents.css'
import { LogosSeguindo } from "../../components/logos/favorites/logo-favorite"
import { RecipeCard } from "../../components/RecipeCard"
import { useState, useEffect } from "react"
import Api from "../../Api"

export const Seguindo = () => {
    const [recipesFavorite, setRecipesFavorite] = useState([])
  useEffect(async () => {
    const result = await Api.listRecipesFavorite();
    setRecipesFavorite(result)
  }, [])
    return (
        <div className="tela">
            <LogosSeguindo />
            <h3 className="h3">Esta aqui é a pagina de favorites</h3>
            <div id="carts" className="carts">
                {recipesFavorite.map((item) => {
                    return <RecipeCard key={item.title} recipe={item} />
                })}
            </div>
            <h2 className="fim">Parece que você chegou ao fim</h2>
        </div>
    )
}