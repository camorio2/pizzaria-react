import { Routes, Route } from "react-router-dom";
import "./App.css";

import { LoginScreen } from "./pages/login";
import { WelcomePage } from "./pages/welcome/index";
import { CadastroScreen } from "./pages/cadastro";
import { HomeScreen } from "./pages/ListRecipes";
import { UserProvider } from "./contexts/UserContext";
import { AddRecipesUser } from "./pages/AddRecipes/index";
import { Seguindo } from "./pages/Principal-Seguindo/Seguindo";
import { PerfilUser } from "./pages/UsuarioPges/perfil-user/perfil-user";
import { UserFavoritePage } from "./pages/UsuarioPges/perfil-user-sequindo/perfil-user-seguindo";
import { PerfilUserPrefrencia } from "./pages/UsuarioPges/perfil-user-preferencia/perfil-user-preferencia";
import { MyRecipesPage } from "./pages/UsuarioPges/perfil-minhas-receitas/perfil-minhas-reitas";



export default () => {
  return <>
   <UserProvider>
      <Routes>
        <Route path="/" element={< WelcomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/cadastro" element={<CadastroScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/seguindo" element={<Seguindo />} />
        <Route path="/add-recipes" element={<AddRecipesUser />} />
        <Route path="/perfiluser" element={<PerfilUser />} />
        <Route path="/perfilSeguindo" element={<UserFavoritePage />}/>
        <Route path="/perfilPreferencia" element={<PerfilUserPrefrencia />}/>
        <Route path="/perfilminhasreceitas" element={<MyRecipesPage />}/>
      </Routes>
    </UserProvider>
    </>
  );
};
