import React from 'react';

const Usuario = ({user, handleDelete}) => {

	const { nombre, correo, edad, id } = user

  return (
		<tr className='border-b hover:bg-gray-50'>
			<td className='p-3'>{nombre}</td>
			<td className='p-3'>{correo}</td>
			<td className='p-3'>{edad}</td>
			<td className='p-3'>
				<button
					type='button'
					className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs'
					onClick={()=> handleDelete(id)}
				>Eliminar</button>
			</td>
		</tr>
  );
};



export default Usuario;
