import React from 'react'
import { useContext } from 'react';
import { loginContext } from '../../Context';

function Login() {

  const {setFullname, setLanguage, setExperience, setVacancie, setShowProfile} = useContext(loginContext);

  return (
    <>
      <section className='bg-secondary py-md-4'>
        <div className='container bg-light text-center pt-4 pb-5 my-md-4 border rounded'>
          <h1 className='display-6'>Vaga de Emprego para Desenvolvedor Front-End Jr</h1>  
          <form className='d-flex flex-column px-3 px-sm-5'>
            <label className='text-start mb-3'>
              Digite o nome completo:
              <input
                className='form-control'
                type='text'
                placeholder='Digite o nome completo...'
                onChange={(e)=>setFullname(e.target.value)} 
              />
            </label>
            <label className='text-start mb-3'>
              Digite a linguagem:
              <input
                className='form-control'
                type='text'
                placeholder='Digite a linguagem...'
                onChange={(e)=>setLanguage(e.target.value)} 
              />
            </label>
            <label className='text-start mb-3'>
              Digite o tempo de experiência:
              <input
                className='form-control'
                type='text'
                placeholder='Digite o tempo de experiência...'
                onChange={(e)=>setExperience(e.target.value)} 
              />
            </label>
            <label className='text-start mb-4'>
              Digite o nome da vaga:
              <input
                className='form-control'
                type='text'
                placeholder='Digite o nome da vaga...'
                onChange={(e)=>setVacancie(e.target.value)} 
              />
            </label>
            <button className='btn btn-primary' onClick={()=>setShowProfile(true)}>Enviar</button>  
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
