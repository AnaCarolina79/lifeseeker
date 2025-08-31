import React from 'react'
import './style.css'

import ButtonSubmit from '../../components/buttonSubmit';
function Login() {
  return (
    <div className='allScreen'>
        <div className='image'>

        </div>
      <div className='formulario'>
        <div className='logo'>
       <h3>
        Aurora
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="61.283" height="40.407" fill="none" overflow="visible"><path d="M 45.892 0 L 50.648 9.694 L 61.283 11.249 L 53.587 18.795 L 55.404 29.45 L 47.929 25.324 C 47.929 25.324 41.973 32.785 30.5 36.779 C 19.027 40.774 0 40.397 0 40.397 C 0 40.397 23.335 39.145 35.48 29.544 C 41.552 24.744 50.012 12.943 50.418 11.456 C 50.824 9.969 38.196 18.795 38.196 18.795 L 30.5 11.249 L 41.135 9.694 Z" fill="#7D8CFF"></path></svg>
        </div>
      <div className='form'>
        <input type="text" placeholder='Nome' />
        <input type="text" placeholder='Senha'/>
      </div>
      <div className='forget'>
        <div className='check'>
          <input type="checkbox" />
          Lembrar de mim
        </div>
        <a href="">Esqueceu a Senha?
          </a>  
      </div>
      
      <ButtonSubmit/>
      </div>

    </div>
  )
}

export default Login;