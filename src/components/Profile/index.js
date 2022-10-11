import React from 'react'
import { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { loginContext } from '../../Context';

function Profile() {

  const {fullName, language, experience, vacancie } = useContext(loginContext);

  return (
    <>
      <section className='bg-secondary p-sm-3 py-3'>
        <div className='container-sm pt-2 pb-5'>
          <ListGroup className=' py-5 px-md-5'>
            <ListGroup.Item><h1 className='display-6 py-2 text-center'>Candidato</h1></ListGroup.Item>
            <ListGroup.Item className='py-3 py-sm-4'><b>Nome:</b> {fullName}</ListGroup.Item>
            <ListGroup.Item className='py-3 py-sm-4'><b>Linguagem:</b> {language}</ListGroup.Item>
            <ListGroup.Item className='py-3 py-sm-4'><b>Tempo de Experiência:</b> {experience}</ListGroup.Item>
            <ListGroup.Item className='py-3 py-sm-4'><b>Vaga:</b> {vacancie}</ListGroup.Item>  
          </ListGroup>
        </div>
      </section>
    </>
  );
}

export default Profile;