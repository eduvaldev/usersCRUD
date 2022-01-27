import React from 'react';
import Formulario from '../components/Formulario';

const NuevoUsuario = () => {
    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Nuevo User</h1>
            <p className='mt-10'>Llena los siguientes campos para registrar un Usuario</p>
            <Formulario/>
        </>
    );
};

export default NuevoUsuario;
