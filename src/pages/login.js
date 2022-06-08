import firebase from 'firebase/app';

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './login.css'

import Api from '../Api';



// import Home from './components/routes/home';
// function initialState() {
//   return { text: '', email: '', password: '' };
// }

// export const LoginScreen = () => {
//   const [values, setValues] = useState(initialState);

//   function onChange(evento) {
//     const { value, name } = evento.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   }
//   

//     if (
//       //hardcoded - hard('duro, rígido') + coded('codificado') = codificado de forma rígida
//       values.text = 'Temotio',
//       values.email == 'oitomitluis32@gmail.com'
//       &
//       values.password == 'senhabemlegal'
//     ) {
//       navigate("/home");
//     } else {
//       alert('ERROR: NOT FOUND');
//     }
//   }

//   return (
//     <div className='telaLogin'>
//         <div className='login'>
//           <img className="newChat--itemavatar" src='https://www.olgastore.online/wp-content/uploads/2020/07/Ong-Junta-Mais-Capa-Olga-Store.jpg' alt="" />
//           <div className='btnName'>
//             <PersonIcon />
//             <input
//               name='text'
//               className='btn'
//               type='text'
//               placeholder='Digite seu nome'
//               onChange={onChange}
//               value={values.text}
//             />
//           </div>
//           <div className='btnEmail'>
//             <EmailIcon />
//             <input
//               name='email'
//               className='btn'
//               type='email'
//               placeholder='Digite seu Emeil'
//               onChange={onChange}
//               value={values.email}
//             />
//           </div>
//           <div className='btnSenha'>
//             <LockIcon />
//             <input
//               name='password'
//               className='btn'
//               type='password'
//               placeholder='Digite sua senha'
//               onChange={onChange}
//               value={values.password}
//             />
//           </div>
//           <div>
//             <p className='plogin'>Já tem uma conta?
//               <strong
//                 className='linkLogin'>
//                 login
//               </strong>
//             </p>
//           </div>

//           <div className='btnSubmite'>
//             <button
//               className='submite'
//               type='submit'
//               onClick={entrar}
//             >
//               Entrar
//             </button>
//           </div>
//         </div>
//     </div>
//   );
// }




export const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  console.log(email)
  const ArrowBack = () => {
    navigate("/")
  }
  const HandleClick = async () => {
    const users = await Api.listUsers();
    const user = users.find(user => user.email === email);
    if (user.email == email
      &
      user.password == password) {
      navigate("/")
    } else  {
      alert('o campo de email nao esta preenchido')
    }

    // const user = users.find(user => user.email === email)
    // if (user.password === password) {
    //   navigate("/")
    // }else {
    //   alert('errado')
    // }
  }

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value

    setEmail(newEmail)
  }

  const handleChangePassword = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
  }

  return (
    <div className="tela">
      <a >
        <div className="arrowBack" onClick={ArrowBack}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="white" />
            <path
              d="M24.0156 15.0156V16.9844H11.8281L17.4062 22.6094L16 24.0156L7.98438 16L16 7.98438L17.4062 9.39062L11.8281 15.0156H24.0156Z"
              fill="#333333" />
          </svg>
        </div>
      </a>
      <header className="info-header">
        Insira suas informações para efetuar o seu seu Login
      </header>
      <div className="info">
        <div>
          <p>Email:</p>
          <input
            name='email'
            className='btn'
            type='email'
            onblur="validacaoEmail(f1.email)" 
            placeholder='Digite seu email'
            maxlength="60"
            onChange={handleChangeEmail}
            value={email}

          />
        </div>
        <div>
          <p>Senha:</p>
          <input
            name='password'
            className='btn'
            type='password'
            maxlength="10"
            placeholder='Digite sua senha'
            onChange={handleChangePassword}
            value={password}

          />
        </div>
        <p id="mensagemErro"></p>
      </div>
      <button className="button" type="submit" onClick={HandleClick}>
        <p className="p">
          Entrar
        </p>
      </button>
    </div>
  );
}