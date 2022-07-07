import React, { useState } from "react";
import './AddRecipes.css'
import './index.css'

import { useNavigate } from "react-router-dom";
import Api from "../../Api";
import Temotio from '../../assets/timo.jpg'
import { Logo } from "../../components/Logo";
import { Navigate } from "react-router-dom";
import { MenuItens } from "../../components/logos/menu/menuItens";
export const AddRecipesUser = () => {
    const Navigate = useNavigate()

    const [newRecipe, setNewRecipe] = useState({
        title: '',
        description: '',
        ranking: 0
    })
    const handleOnChange = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        setNewRecipe(oldState => {
            return {
                ...oldState,
                [inputName]: inputValue
            }
        })
    }
    const handleOnSubmit = async () => {
        alert('Formulário enviado')
        const result = await Api.addRecipe(newRecipe)
        console.log('retorno do firebase', result)

        setNewRecipe({
            title: '',
            description: '',
            ranking: 0,
        })
    }
    const HandleAddRecipe = () => {
    }
    const HandleHome = () => {
        Navigate('/home')
    }
    const hndlePerfilUser = () => {
        Navigate('/perfiluser')
    }
    return (
        <>
            <div className="tela ingredients">
                <div className="userInfo">
                    <div className="before" onClick={HandleAddRecipe}>
                        <div id="itens" class="itens">
                            <div class="item" onclick="handleImage()">
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 13.2C11.7674 13.2 13.2 11.7674 13.2 10C13.2 8.23274 11.7674 6.80005 10 6.80005C8.23274 6.80005 6.80005 8.23274 6.80005 10C6.80005 11.7674 8.23274 13.2 10 13.2Z" fill="#F86E10" />
                                    <path d="M7 0L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2H14.83L13 0H7ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z" fill="#F86E10" />
                                </svg>

                            </div>
                            <div class="item">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z" fill="#F86E10" />
                                </svg>

                            </div>
                            <div class="item">
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 4.5V1C14 0.45 13.55 0 13 0H1C0.45 0 0 0.45 0 1V11C0 11.55 0.45 12 1 12H13C13.55 12 14 11.55 14 11V7.5L18 11.5V0.5L14 4.5Z" fill="#F86E10" />
                                </svg>

                            </div>
                        </div>
                        + </div> <MenuItens/> <div className="logos">
                        <Logo />
                        <img
                            onClick={hndlePerfilUser}
                            src={
                                Temotio
                            }
                            alt=""
                        ></img>
                    </div>
                </div>
                <div class="container">
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">s</div>
                    <div class="bordas">1</div>
                    <div class="bordas">1</div>
                    <div class="bordas">1</div>
                    <div class="bordas">1</div>
                    <div class="bordas">1</div>
                    <div class="bordas">1</div>
                    <div class="bordas">1</div>
                    <div class="bordas">1</div>
                    <div class="bordas">1</div>
                    <div class="bordas">1</div>

                    <div class="sub containers">
                        <div class="ingredientes">
                            <h2>INGREDIENTES</h2>
                            <div class="lista-ingredientes">
                                <div class="marca">
                                    <div class="checkbox-container">
                                        <input type="checkbox" />pimentão
                                    </div>
                                    <div class="checkbox-container">
                                        <input type="checkbox" />sal
                                    </div>
                                    <div class="checkbox-container">
                                        <input type="checkbox" />arroz
                                    </div>
                                    <div class="checkbox-container">
                                        <input type="checkbox" />pimentão
                                    </div>
                                    <div class="checkbox-container">
                                        <input type="checkbox" />pimentão
                                    </div>
                                    <div class="checkbox-container">
                                        <input type="checkbox" />pimentão
                                    </div>
                                </div>
                                <div class="marca">
                                    <div class="checkbox-container">
                                        <input type="checkbox" />pimentão
                                    </div>
                                    <div class="checkbox-container">
                                        <input type="checkbox" />pimentão
                                    </div>
                                    <div class="checkbox-container">
                                        <input type="checkbox" />pimentão
                                    </div>
                                    <div class="checkbox-container">
                                        <input type="checkbox" />pimentão
                                    </div>
                                    <div class="checkbox-container">
                                        <input type="checkbox" />pimentão
                                    </div>
                                    <div class="checkbox-container">
                                        <input type="checkbox" />pimentão
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="mmodoPreparo">
                            <h2 className="titulo">PREPARO, DESCRIÇÃO</h2>
                            <textarea
                                className="border"
                                id="msg" rows="6"
                                cols="56" type="textarea"
                                placeholder="Faça a descrição da sua receita"
                                value={newRecipe?.description}
                                name="description"
                                onChange={handleOnChange}
                            />
                        </div>
                        <div class="tempoRendimento">
                            <div class="preparo">
                                <h2 >TITULO RECEITA</h2>
                                <input className="border" type="text" placeholder="Adiciona o titlo da sua recita" name="title" value={newRecipe?.title} onChange={handleOnChange} />
                                <select className="border" name="" id="">
                                    <option value="Minutos">Vegetariano</option>
                                    <option value="Hora">Vegano</option>
                                    <option value="Horas">Vegetariano/Vegano</option>
                                </select>
                            </div>
                            <div class="preparo">
                                <h2>CLASSIFICÃO</h2>
                                <input className="border" type="number" placeholder="Avalie esta receita" name="ranking" value={newRecipe?.ranking} onChange={handleOnChange} />
                                <select className="border" name="" id="">
                                    <option value="Porção">5 Estrelas</option>
                                    <option value="Porções">Mais a menos</option>
                                </select>
                            </div>
                        </div>
                        <div class="categorias">
                            <div class="switch-container">
                                <p>Sem Glútem</p>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div class="switch-container">
                                <p>Sem Lactose</p>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div class="switch-container">
                                <p>Ligth</p>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div class="switch-container">
                                <p>Vegano</p>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div class="switch-container">
                                <p>Vegetariano</p>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div class="switch-container">
                                <p>Diet</p>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <button className="btnSubmite button" type="submit" onClick={handleOnSubmit}>Publicar a sua receita</button>
                    </div>
                </div>
            </div>
        </>
    )
}