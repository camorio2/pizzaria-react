import React, { useContext } from "react";
import "./ListRecipes.css";
import { useState, useEffect } from "react";
import Api from "../../Api";
import { UserContext } from "../../contexts/UserContext";
import { Logo } from "../../components/Logo";
import { RecipeCard } from "../../components/RecipeCard";
import { Alert } from "react-native-web";
import { useNavigate } from "react-router-dom";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const pesquisar = () => {};

  const viwUser = () => {};
  const searchFood = () => {};
  const showPage = () => {
    Alert("Chegou para adicionar uma receita???");
    navigate("/add-recipes");
  };
  const showPageInsert = () => {};

  useEffect(async () => {
    const result = await Api.listRecipes();
    setRecipes(result);
  }, []);

  // console.log("recipes", recipes);
  return (
    <div id="pagePrincipal" className="tela">
      <div className="before" onClick={showPage}>
        +
      </div>
      <div className="arrowBack" onClick={showPageInsert}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="white" />
          <path
            d="M24.0156 15.0156V16.9844H11.8281L17.4062 22.6094L16 24.0156L7.98438 16L16 7.98438L17.4062 9.39062L11.8281 15.0156H24.0156Z"
            fill="#333333"
          />
        </svg>
      </div>
      <div className="logos">
        <Logo />

        <img
          onClick={viwUser}
          src={
            "https://scontent.fbfh14-1.fna.fbcdn.net/v/t39.30808-6/278855603_714458996392819_5890061244741874371_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RxHVEwL8NpQAX8lexAH&_nc_ht=scontent.fbfh14-1.fna&oh=00_AT8v8Rd9ufed_1WOm4AJVRf_aphp3Zd7G0dGPQN3HraXNA&oe=62A5FB7A"
          }
          alt=""
        ></img>
      </div>
      <div className="pesquisa">
        <input
          id="input"
          name="input"
          className="input"
          type="search"
          placeholder="O que vamos cozinhar hoje?"
          onKeyUp={searchFood}
        />
        <svg
          onClick={pesquisar}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0057 8.80503H9.37336L9.14923 8.58891C9.93368 7.67639 10.4059 6.49171 10.4059 5.20297C10.4059 2.32933 8.07662 0 5.20297 0C2.32933 0 0 2.32933 0 5.20297C0 8.07662 2.32933 10.4059 5.20297 10.4059C6.49171 10.4059 7.67639 9.93368 8.58891 9.14923L8.80503 9.37336V10.0057L12.8073 14L14 12.8073L10.0057 8.80503ZM5.20297 8.80503C3.20983 8.80503 1.60091 7.19611 1.60091 5.20297C1.60091 3.20983 3.20983 1.60091 5.20297 1.60091C7.19611 1.60091 8.80503 3.20983 8.80503 5.20297C8.80503 7.19611 7.19611 8.80503 5.20297 8.80503Z"
            fill="#F86E10"
          />
        </svg>
      </div>
      <div className="selecao">
        <div className="celec">
          <a href="./Principal_seguindo.html">
            <p>FAVORITOS</p>
          </a>
        </div>
        <div className="celec">
          <a href="../index/PincipalPage.html">
            <p>POPULARES</p>
          </a>
        </div>
        <div className="celec">
          <a href="../index/Principal_meusIngrdientes.html">
            <p>MEUS INGREDIENTES</p>
          </a>
        </div>
      </div>

      {/* <!-- CARSTS --> */}
      <div id="carts" className="carts">
        <h1 className="resultado">Nenhum resultado encontrado</h1>
        {recipes.map((item) => {
          return <RecipeCard key={item.title} recipe={item} />;
        })}
      </div>

      <h2 className="fim">Parece que você chegou ao fim</h2>
    </div>
  );
};
