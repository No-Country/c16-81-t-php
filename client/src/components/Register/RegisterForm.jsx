import { useRef } from "react";
import { useForm } from "react-hook-form";
import { artDesktop } from "../../assets";
import { Link } from "react-router-dom"

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
        nick_name: "",
        first_name: "",
        last_name: "",
        gender: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        aceptaTerminos: false,
    },
  });

  const password = useRef(null);
  password.current = watch("password", "");

  const enviarDatos = async (datos) => {
    try {
      const respuesta = await fetch('http://localhost/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
  
      if (respuesta.ok) {
        // Los datos se enviaron correctamente
        console.log('Datos enviados correctamente');
      } else {
        // Hubo un error al enviar los datos
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };
  
    const onSubmit = handleSubmit((datos) => {
        // console.log(datos);
        enviarDatos(datos);
        reset();
    });
  

  return (
    <form onSubmit={onSubmit} className="container w-auto mx-2 md:mx-auto px-4 py-4 mb-16 grid grid-cols-1 md:grid-cols-2 gap-2 items-center bg-card rounded-lg">
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-start">
                <h1 className="font-monse font-bold text-secondary text-[30px] md:text-[36px] mb-4 md:mb-12">Crea tu cuenta</h1>
                <div className="flex flex-col ss:flex-row gap-4 mb-4 md:mb-6">
                    <div className="flex flex-col">
                        <div className="flex-flex-col">
                            <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]">Nombre</label>
                            <input
                            type="text"
                            name="first_name"
                            className="shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none mb-1"
                            {...register("first_name", {
                                required: {
                                value: true,
                                message: "Nombre es requerido",
                                },
                                maxLength: 20,
                                minLength: 2,
                            })}
                            />
                        </div>
                        {errors.first_name?.type === "required" && <span className='text-red-500'>Nombre requerido</span>}
                        {errors.first_name?.type === "maxLength" && (
                        <span className='text-red-500'>Nombre no debe ser mayor a 20 caracteres</span>
                        )}
                        {errors.first_name?.type === "minLength" && (
                        <span className='text-red-500'>Nombre debe ser mayor a 2 caracteres</span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]">Apellido</label>
                        <input
                        type="text"
                        name="last_name"
                        className="shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none mb-1"
                        {...register("last_name", {
                            required: {
                            value: true,
                            message: "Apellido es requerido",
                            },
                            maxLength: 20,
                            minLength: 2,
                        })}
                        />
                        {errors.last_name?.type === "required" && <span className='text-red-500'>Apellido requerido</span>}
                        {errors.last_name?.type === "maxLength" && (
                        <span className='text-red-500'>Apellido no debe ser mayor a 20 caracteres</span>
                        )}
                        {errors.last_name?.type === "minLength" && (
                        <span className='text-red-500'>Apellido debe ser mayor a 2 caracteres</span>
                        )}
                    </div>
                </div>

                <div className="flex flex-col ss:flex-row gap-4 mb-4 md:mb-6">
                    <div className="flex flex-col">
                        <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]">Nombre de usuario</label>
                        <input
                        type="text"
                        name="nick_name"
                        className="shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none mb-1"
                        {...register("nick_name", {
                            required: {
                            value: true,
                            message: "Nombre es requerido",
                            },
                            maxLength: 12,
                            minLength: 2,
                        })}
                        />
                        {errors.nick_name?.type === "required" && <span className='text-red-500'>Nombre de usuario requerido</span>}
                        {errors.nick_name?.type === "maxLength" && (
                        <span className='text-red-500'>Nombre de usuario no debe ser mayor a 12 caracteres</span>
                        )}
                        {errors.nick_name?.type === "minLength" && (
                        <span className='text-red-500'>Nombre de usuario debe ser mayor a 2 caracteres</span>
                        )}
                    </div>

                    <div>
                        <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]" htmlFor="gender">Género</label>
                        <select name="gender" id="gender" {...register("gender")}
                        className="shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none">
                        <option value="F">Femenino</option>
                        <option value="M">Masculino</option>
                        <option value="O">Otro</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col ss:flex-row gap-4 mb-4 md:mb-6">
                    <div className="flex flex-col">
                        <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]">Teléfono</label>
                        <input
                        type="text"
                        name="phone"
                        className="shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none mb-1"
                        {...register("phone", {
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Ingrese un teléfono válido (solo números)",
                            },
                        })}
                        />
                        {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
                    </div>

                    <div className="flex flex-col">
                        <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]">Correo Electrónico</label>
                        <input
                        type="email"
                        name="email"
                        className="shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none mb-1"
                        {...register("email", {
                            required: {
                            value: true,
                            message: "Correo es requerido",
                            },
                            pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Correo no válido",
                            },
                        })}
                        />
                        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col ss:flex-row gap-4 mb-4 md:mb-6">
                    <div className="flex flex-col">
                        <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]">Contraseña</label>
                        <input
                        type="password"
                        name="password"
                        className="shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none mb-1"
                        {...register("password", {
                            required: {
                            value: true,
                            message: "Contraseña es requerida",
                            },
                            minLength: {
                            value: 6,
                            message: "Contraseña debe ser mayor a 6 caracteres",
                            },
                        })}
                        />
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    </div>

                    <div className="flex flex-col">
                        <label className="block mb-1 font-monse font-medium text-paragraph text-[16px]">Confirma Contraseña</label>
                        <input
                        type="password"
                        name="confirmPassword"
                        className="shadow-sm px-4 py-2 font-monse font-semibold text-primary bg-[#F7FBFF] text-sm rounded-lg outline-none mb-1"
                        {...register("confirmPassword", {
                            required: {
                            value: true,
                            message: "Confirmar contraseña es requerida",
                            },
                            minLength: {
                            value: 6,
                            message: "Confirmar contraseña debe ser mayor a 6 caracteres",
                            },
                            validate: (value) =>
                            value === password.current || "Las contraseñas no coinciden",
                        })}
                        />
                        {errors.confirmPassword && (
                        <span className='text-red-500'>{errors.confirmPassword.message}</span>
                        )}
                    </div>
                </div>
            </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col">
                        <div className="flex flex-1 gap-2 items-baseline">
                            <input
                            type="checkbox" 
                            name="aceptaTerminos"
                            {...register("aceptaTerminos", {
                                required: {
                                value: true,
                                message: "Acepta los términos y condiciones",
                                },
                            })}
                            />
                            <label className="block mb-1 font-monse font-medium text-paragraph text-[14px]">Acepto los términos y condiciones</label>
                        </div>
                        {errors.aceptaTerminos && <span className='text-red-500'>{errors.aceptaTerminos.message}</span>}
                    </div>

                    <button type="submit"
                    className={`py-2 px-6 mt-4 w-[280px] bg-gray-gradient flex-1 flex gap-2 flex-row justify-center items-center font-monse font-medium text-[16px]
                    text-white hover:text-secondary outline-none rounded-[14px] shadow-2xl`}>Registrase</button>

                    <p className="font-monse text-sm font-light text-paragraph mt-4">
                        Ya tienes una cuenta?{" "}
                        <Link
                            to="/login"
                            className="font-monse font-bold text-texto hover:underline"
                        >
                            Iniciar sesión
                        </Link>
                    </p>
                </div>
        </div>

        <div className="hidden md:block">
            <img src={artDesktop} alt="artDesktop"/>
        </div>
    </form>
  );
}

export default Formulario;