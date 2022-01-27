import { useState, useEffect } from 'react';
import Usuario from '../components/Usuario';

const Inicio = () => {

	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		const getUsers = async () => {
			try {
				const url = 'http://localhost:4000/usuarios'
				const response = await fetch(url)
				const result = await response.json()
				console.log(result)
				setUsuarios(result)
			} catch (error) {
				console.log(error)
			}
		}
		getUsers()
	}, [])

	const handleDelete = async id => {
		const confirmar = confirm('Seguro que desea eliminar')

		if(confirmar){
			try {
				const url = `http://localhost:4000/usuarios/${id}`
				const response = await fetch(url, {
					method: 'DELETE'
				})

				await response.json()
				const deleteUser = usuarios.filter( user => user.id != id)
				setUsuarios(deleteUser)
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<>
			<h1 className='font-black text-4xl text-blue-900'>Usuarios</h1>
			<p className='mt-10'>Administra tus usuarios</p>
			<table className='w-full mt-5 table-auto shadow bg-white'>
				<thead className='bg-blue-800 text-white'>
					<tr>
						<th className='p-2'>Nombre</th>
						<th className='p-2'>Correo</th>
						<th className='p-2'>Edad</th>
						<th className='p-2'>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{usuarios.map(user => (
						<Usuario
							key={user.id}
							user={user}
							handleDelete={handleDelete}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Inicio;
