import  React from 'react';

function Testimonio(){
  return (
    <div className='contenedor-test'>
      <img 
        className='imagen-test'
        src={require('../imagenes/test_rosa.png')}
        alt='Foto Logo'/>
        <div className='contenedor-texto-test'>
          <p className='nombre-test'> Integrity App</p>
          <p className='desc-test'> Examen App</p>
        </div>
    </div>
  );
}

export default Testimonio;