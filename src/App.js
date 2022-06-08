import { Routes, Route } from "react-router-dom"
import './App.css';

import Api from "./Api";


import { LoginScreen } from "./pages/login";
import { HomePage } from "./pages/index";
import { CadastroScreen } from "./pages/cadastro";
import { HomePage } from "./pages/HomePage";



export default () => {
  return <>
    <Routes>
      <Route path="/" element={< HomePage /> }/>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/cadastro" element={<CadastroScreen />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </>
}