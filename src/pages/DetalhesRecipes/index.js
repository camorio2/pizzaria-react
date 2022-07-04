import './index.css'
import Image from '../../assets/image 2.png'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Temotio from '../../assets/timo.jpg'
import { useNavigate } from 'react-router-dom';

export const DetailsRecipes = () => {
    const navigator = useNavigate();
    const HandleHome = () => {
        navigator('/home')
    }
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
                        <h2 className='h2d'>Churos com Churos</h2>
                        <p className='ABC'>
                            É possível enviar SMS com texto, fotos e até áudios dentro do aplicativo. Se você gosta de ter apps do Google em seu smartphone Android, esta é com certeza a melhor opção.
                            Hang out anytime, anywhere ... Messenger makes it easy and fun to stay close to your favorite people. ... New! Message your Instagram friends right from Messenger.
                            Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require
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