import styles from "../../../style";
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

const EditProfile = () => {
  const { labelElement, inputElement } = styles
  const imgPreviewElement = useRef(null);

  const { register, reset, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
        nick_name: "", //"CharlyCharly",
        first_name: "", //"Charly",
        last_name: "", //"Garcia",
        gender: "", //"male",
        phone: "", //"1234567",
        email: "", //"charly_garcia@fakegmail.com",
        avatar: ""
      },
    }
  );
  const onSubmit = (data) => {
    console.log({data});
  }

  const handleChangeAvatar = (e) => { 
    const [avatar] = e.target.files
    if (avatar) {
      imgPreviewElement.current.classList.remove('hidden')
      imgPreviewElement.current.src = URL.createObjectURL(avatar)
    }
  }

  const handleEmptyAvatar = (e) => { 
    e.target.classList.add('hidden');
  }

  return (
      <form id="editProfileForm" onSubmit={handleSubmit(onSubmit)} className={`min-h-[58vh] flex flex-col gap-y-12 p-6 border-2 border-black rounded-lg`}>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col">
            <label htmlFor="nick_name" className={`${labelElement}`}>Nickname</label>
            <input type="text" name="nick_name" id="nick_name" className={`${inputElement}`}
              {...register("nick_name", { 
                  required: {
                    value: true,
                    message: "El nickname es requerido",
                  }, 
                  maxLength: 12, minLength: 4
                })
              }  />
            {errors.nick_name?.type === "required" && <span className='text-red-500'>Nickname es requerido</span>}
            {errors.nick_name?.type === "maxLength" && (
            <span className='text-red-500'>Nickname no debe ser mayor a 12 caracteres</span>
            )}
            {errors.nick_name?.type === "minLength" && (
            <span className='text-red-500'>Nickname debe ser mayor a 2 caracteres</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="first_name" className={`${labelElement}`}>Primer nombre</label>
            <input type="text" name="first_name" id="first_name" className={`${inputElement}`} 
            {...register("first_name", {
                required: {
                  value: true,
                  message: "El primer nombre es requerido",
                }, 
                maxLength: 20, minLength: 4
              })
            } />
            {errors.first_name?.type === "required" && <span className='text-red-500'>El primer nombre es requerido</span>}
            {errors.first_name?.type === "maxLength" && (
            <span className='text-red-500'>El primer nombre no debe ser mayor a 20 caracteres</span>
            )}
            {errors.first_name?.type === "minLength" && (
            <span className='text-red-500'>El primer nombre debe ser mayor a 4 caracteres</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="last_name" className={`${labelElement}`}>Apellido</label>
            <input type="text" name="last_name" id="last_name" className={`${inputElement}`}
            {...register("last_name", {
                required: {
                  value: true,
                  message: "El apellido es requerido",
                },
                maxLength: 20, minLength: 4
              })
            } />
            {errors.last_name?.type === "required" && <span className='text-red-500'>El apellido es requerido</span>}
            {errors.last_name?.type === "maxLength" && (
            <span className='text-red-500'>El apellido no debe ser mayor a 20 caracteres</span>
            )}
            {errors.last_name?.type === "minLength" && (
            <span className='text-red-500'>El apellido debe ser mayor a 4 caracteres</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className={`${labelElement}`}>Email</label>
            <input type="email" name="email" id="email" className={`${inputElement}`}
            {...register("email", { 
                required: {
                  value: true,
                  message: "El email es requerido",
                }
              })
            } />
            {errors.email?.type === "required" && <span className='text-red-500'>El email es requerido</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className={`${labelElement}`}>Telefono</label>
            <input type="tel" name="phone" id="phone" className={`${inputElement}`}
            {...register("phone", {
                required: {
                  value: true,
                  message: "El telefono es requerido",
                }
              })
            } />
            {errors.phone?.type === "required" && <span className='text-red-500'>El telefono es requerido</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" id="gender" className={`${labelElement}`}>Genero</label>
            <select name="gender" className={`${inputElement}`}
              {...register("gender", {
                  required: {
                    value: true,
                    message: "El genero es requerido",
                  } 
                })
              }
            >
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
            {errors.gender?.type === "required" && <span className='text-red-500'>El genero es requerido</span>}
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="avatar" className={`${labelElement}`}>Avatar</label>
            <input type="file" {...register("avatar")} id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleChangeAvatar} />
            <img id="blah" src="#" onError={handleEmptyAvatar} alt="Preview avatar" ref={imgPreviewElement} className="rounded-full text-center text-transparent" width={150} height={150}/>
          </div>
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-activePurple px-12 py-2 rounded-lg text-xl font-bold text-card">Guardar</button>
          <button type="reset" onClick={reset} className="bg-ligthPurple px-12 py-2 rounded-lg text-xl font-bold text-card">Limpiar</button>
        </div>
      </form>
  );
};

export default EditProfile;
