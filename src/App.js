import { Routes, Route } from "react-router-dom"
import './App.css';

import { LoginScreen } from "./pages/login";
import { WelcomePage } from "./pages/index";
import { CadastroScreen } from "./pages/cadastro";
import { HomeScreen } from "./pages/HomePage";
import { UserProvider } from "./contexts/UserContext";
import { AddRecipesUser } from "./pages/AddRecipes";


export default () => {


  return <>
   <UserProvider>
      <Routes>
        <Route path="/" element={< WelcomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/cadastro" element={<CadastroScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/add-recipes" element={<AddRecipesUser />} />
      </Routes>
    </UserProvider>
    </>
   
  
}