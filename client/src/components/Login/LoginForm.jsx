import React from 'react'
import { useForm } from 'react-hook-form';
import { artMobile } from "../../assets";
import { Link, useNavigate } from "react-router-dom"

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((datos) => {
        console.log(datos);
        enviarDatosLogin(datos);
        reset();
    });

    const enviarDatosLogin = async (datos) => {
        try {
        const respuesta = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                'withCredentials': "true",
            },
            body: JSON.stringify(datos)
        });

        if (respuesta.ok) {
            // Los datos se enviaron correctamente
            console.log('Datos de inicio de sesión enviados correctamente');
            navigate("/dashboard");
        } else {
            // Hubo un error al enviar los datos
            console.error('Error al enviar los datos de inicio de sesión');
        }
        } catch (error) {
            console.error('Error al enviar los datos de inicio de sesión:', error);
        }
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className="container w-auto mx-2 md:mx-auto px-4 py-4 mb-16 grid grid-cols-1 md:grid-cols-2 gap-2 items-center bg-card rounded-lg">
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-monse font-bold text-secondary text-[30px] md:text-[36px] mb-4 md:mb-12">Bienvenido</h1>
            <div className="flex flex-col items-start gap-4">
                <div className='flex flex-col'>
                    <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]">Correo Electrónico</label>
                    <input type='email'
                    className="w-[280px] sm:w-[300px] shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none mb-1"
                    {...register("email", {
                        required: {
                        value: true,
                        },
                        pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        },
                    })} />
                    {errors.email && <span span className='text-red-500'>Este campo es requerido</span>}
                </div>
                <div className='flex flex-col'>
                    <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]">Contraseña</label>
                    <input type="password"
                    className="w-[280px] sm:w-[300px] shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none mb-1"
                    {...register("password", {
                        required: {
                        value: true,
                        },
                    })} />
                    {errors.password && <span span className='text-red-500'>Este campo es requerido</span>}
                </div>
            </div>
    
            <button type="submit" 
            className={`py-2 px-6 mt-4 w-[280px] sm:w-[300px] bg-gray-gradient flex-1 flex gap-2 flex-row justify-center items-center font-monse font-medium text-[16px]
            text-white hover:text-secondary outline-none rounded-[14px] shadow-2xl`}>Ingresar</button>

            <p className="font-monse text-sm font-light text-paragraph mt-4">
                ¿No tienes una cuenta?{" "}
                <Link
                    to="/register"
                    className="font-monse font-bold text-texto hover:underline"
                >
                    Registrate
                </Link>
            </p>
        </div>

        <div className="hidden md:block pr-24">
            <img src={artMobile} alt="art"/>
        </div>
    </form>
  )
}

export default LoginForm


