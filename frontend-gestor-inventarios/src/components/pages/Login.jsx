import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";

export const Login = () => {
  return (
    
    <div className='loginForm'>
      <form action="">
        <h1>Login</h1>

        <div className='input-box'>
          <input type="text" id='input-name' placeholder='Usuario' required />
          <FaUser className='icon'/>

        </div>

        <div className='input-box'>
          <input type="password" id='input-password' placeholder='Contraseña' required />
          <FaLock className='icon'/>
        </div>

        <div className='forgot-password'>
          <a href="#">Olvide mi Contraseña</a>
        </div>

        <button type='submit'>Ingresar</button>
        {/*
        <div className='link-register'>
          <p>¿Aún no tienes cuenta?<a href="#">Registrate</a></p>
        </div>
        */}

      </form>
    </div>

  )
}

