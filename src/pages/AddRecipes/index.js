import React, { useState } from "react";
import './AddRecipes.css'

import { useNavigate } from 'react-router-dom';
import Api from "../../Api";


export const AddRecipesUser = () => {
    const navigate = useNavigate();
    const [newRecipe, setNewRecipe] = useState({
        title:'',
        description: '',
        ranking: 0
    })

    const handleOnChange = (e) => {
        const inputName  = e.target.name
        const inputValue = e.target.value
        setNewRecipe(oldState => {
            return {
                ...oldState,
                [inputName]: inputValue
            }
        })
    }

    const handleOnSubmit = async  () => {
        alert('Formulário enviado')
        const result = await Api.addRecipe(newRecipe)
        console.log('retorno do firebase', result)

        setNewRecipe({ 
            title:'',
            description: '',
            ranking: 0
        })
    }

    return <div className="addrecipes">
        <h1>Adicionar uma Receita</h1>
        <input type="text" placeholder="Adiciona o titlo da sua recita" name="title" value={newRecipe?.title} onChange={handleOnChange}/>
        <input type="textarea" placeholder="Faça a descrição da sua receita" name="description" value={newRecipe?.description} onChange={handleOnChange}/>
        <input type="number" placeholder="Avalie esta receita" name="ranking" value={newRecipe?.ranking} onChange={handleOnChange}/>
        <button type="submit">Adiciona a sua imagem</button>
        <button type="submit" onClick={handleOnSubmit}>Publicar a sua receita</button>
    </div>
}