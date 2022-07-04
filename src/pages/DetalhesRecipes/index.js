import './index.css'
import Image from '../../assets/image 2.png'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Temotio from '../../assets/timo.jpg'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from '../../Api';

export const DetailsRecipes = () => {
    const { id } = useParams()
    const navigator = useNavigate();
    const [recipeData, setRecipeData] = useState()
    const HandleHome = () => {
        navigator('/home')
    }
    useEffect(async ()=>{
        const doc = await Api.getRecipe(id)
        if (doc.exists) {
            const data = doc.data()
            console.log("Document data:", data);
            setRecipeData(data)

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }, [])
    return (
        <div className="tela Detalhes">
            <div className='h1Titulo'>
                <div className='bbb b' onClick={HandleHome}>
                    <ArrowBackIcon />
                    <p>Voltar</p>
                </div>
                <h1 >Detalhes dessa Receita</h1>
            </div>
            <div className='detalhes'>
                <div className='GropoA'>
                    <div className='imagesi'>
                        <img src={Image} className='imagemDetalhesRecipes' alt='viva' />
                        <img src={Image} className='imagemDetalhesRecipes' alt='viva' />
                    </div>
                </div>
                <div className='GropoB'>
                    <div className='GropoAB'>
                        <h2 className='h2d'>{recipeData?.title}</h2>
                        <p className='ABC'>
                            {recipeData?.description}
                        </p>
                        <div className='ABCD'>
                            <p className='aaa'>vegetariano</p>
                            <p className='aaa'>Sem Clutem</p>
                            <p className='aaa'>4 porcoes</p>
                        </div>
                        <div className='infoDetalhesUser'>
                            <img src={Temotio} />
                            <p className='name'>Temotio Luis Bernardo</p>
                            <div className='parte2Detalhes'>
                                <p >5.0</p>
                                <p>
                                    <StarHalfIcon />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='roatape'>
                        <p className='bbb'>
                            Adicionar nos Favorotos
                        </p>
                        <p className='bbb'>
                            Adicionar Nas Minhas Receitas
                        </p>
                        <p className='bbb'>
                            Marcar Para Fazer Esta Receita
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}