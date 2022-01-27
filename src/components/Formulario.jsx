import React from 'react';
import { Form, Formik, Field } from 'formik'
import { useNavigate } from 'react-router-dom'

function Formulario() {

	const navigate = useNavigate()

	const handelSubmit = async (values) => {
		try {
			const url = 'http://localhost:4000/usuarios'
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log(response)
			const result = await response.json()
			console.log(result)
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

  return (
	<div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
		<h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Usuario</h1>
		<Formik
			initialValues={{
				nombre: '',
				edad: 0,
				correo: '',
				contraseña: ''
			}}
			onSubmit={ async(values, {resetForm}) => {
				await handelSubmit(values)
				resetForm()
			}}
		>
			{() => (

				<Form
					className='mt-10'
				>
					<div>
						<label
							className='text-gray-800'
							htmlFor='nombre'
						>Nombre:</label>
						<Field
							id='nombre'
							type='text'
							className='mt-2 block w-full p-3 bg-gray-50'
							placeholder='Nombre de usuario'
							name='nombre'
						/>
					</div>
					<div>
						<label
							className='text-gray-800'
							htmlFor='edad'
						>Edad:</label>
						<Field
							id='edad'
							type='number'
							className='mt-2 block w-full p-3 bg-gray-50'
							placeholder='Edad'
							name='edad'
						/>
					</div>
					<div>
						<label
							className='text-gray-800'
							htmlFor='email'
						>Correo:</label>
						<Field
							id='nombre'
							type='email'
							className='mt-2 block w-full p-3 bg-gray-50'
							placeholder='Correo'
							name='correo'
						/>
					</div>
					<div>
						<label
							className='text-gray-800'
							htmlFor='contraseña'
						>Contraseña:</label>
						<Field
							id='contraseña'
							type='text'
							className='mt-2 block w-full p-3 bg-gray-50'
							placeholder='contraseña'
							name='contraseña'
						/>
					</div>
					<input
						type='submit'
						value='Agregar Usuario'
						className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
					/>
				</Form>
			)}
		</Formik>
	</div>
  );
}


export default Formulario;
