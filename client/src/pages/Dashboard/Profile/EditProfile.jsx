import styles from "../../../style";
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom'

const EditProfile = () => {
  const { labelElement, inputElement } = styles

  const [userInfo, setUserInfo] = useState(null)
  const [token, setToken] = useState(localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME))
  const imgPreviewElement = useRef(null);
  const navigate = useNavigate()

  
  const { register, reset, handleSubmit, formState: { errors, isDirty } } = useForm(
    {
      defaultValues: {
        nick_name: "",
        first_name: "",
        last_name: "",
        gender: userInfo?.gender,
        phone: "",
        email: "",
        avatar: ""
      },
    }
  );
  

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const resp = await fetch("http://127.0.0.1:8000/api/verify-token", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: "application/json",
            withCredentials: "true",
          },
        });
  
        const data = await resp.json();
        if (!resp.ok) {
          throw new Error(data.message);
        }
  
        return data;
      } catch (error) {
        console.error(
          `Error al traer datos del perfil del usuario y actualizar su perfil: ${error.message}`
        );
        return null;
      }
    };
  
    getUserInfo()
        .then(setUserInfo)
        .catch(setUserInfo)
  }, [token])
  
  const handleReset = () => { reset( undefined, {keepDirtyValues: true}) }
  // const handleReset = () => { reset( undefined, {keepDefaultValues: true}) }

  const cleanFormDataValues = (formDataValues) => Object.keys(formDataValues).reduce( (acum, currentKey) => {
    const value = formDataValues[currentKey]
    
    if( value ){
      return { ...acum, [currentKey]:value }
    }

    return acum
  }, {})

  const onSubmit = async(formDataValues) => {
    
    if( !isDirty ){
      alert('Debes realizar cambios si quieres actualizar tu perfil...')
      return
    }

    const cleanedValues = cleanFormDataValues(formDataValues)
    
    try {
      const resp = await fetch(`http://127.0.0.1:8000/api/users/${userInfo.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: "application/json",
          withCredentials: "true",
        },
        body: JSON.stringify(cleanedValues)
      });

      const data = await resp.json();
      if (!resp.ok) { throw new Error(data.message); }

      alert(data.message);
      navigate('/dashboard/mi-perfil')
      return
    } catch (error) {
      console.error(
        `Error al traer datos del perfil del usuario y actualizar su perfil: ${error.message}`
      );
      return null;
    }
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
        { 
        userInfo &&
        <>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col">
              <label htmlFor="nick_name" className={`${labelElement}`}>Nickname</label>
              <input type="text" name="nick_name" placeholder={userInfo.nick_name} id="nick_name" className={`${inputElement}`}
                {...register("nick_name", { maxLength: 12, minLength: 4}) }
              />
              {errors.nick_name?.type === "maxLength" && (
              <span className='text-red-500'>Nickname no debe ser mayor a 12 caracteres</span>
              )}
              {errors.nick_name?.type === "minLength" && (
              <span className='text-red-500'>Nickname debe ser mayor a 2 caracteres</span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="first_name" className={`${labelElement}`}>Primer nombre</label>
              <input type="text" name="first_name" placeholder={userInfo.first_name} id="first_name" className={`${inputElement}`} 
                {...register("first_name", { maxLength: 20, minLength: 4 }) }
              />
              {errors.first_name?.type === "maxLength" && (
              <span className='text-red-500'>El primer nombre no debe ser mayor a 20 caracteres</span>
              )}
              {errors.first_name?.type === "minLength" && (
              <span className='text-red-500'>El primer nombre debe ser mayor a 4 caracteres</span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="last_name" className={`${labelElement}`}>Apellido</label>
              <input type="text" name="last_name" placeholder={userInfo.last_name} id="last_name" className={`${inputElement}`}
                {...register("last_name", {  maxLength: 20, minLength: 4 }) }
              />
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
              <input type="email" name="email" placeholder={userInfo.email} id="email" className={`${inputElement}`}
                {...register("email")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className={`${labelElement}`}>Telefono</label>
              <input type="tel" name="phone" placeholder={userInfo.phone} id="phone" className={`${inputElement}`}
                {...register("phone")} 
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="gender" id="gender" className={`${labelElement}`}>Genero</label>
              <select name="gender" {...register("gender")} className={`${inputElement}`}>
                <option value={userInfo.gender}>{`Ya especificado (${userInfo.gender})`}</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="avatar" className={`${labelElement}`}>Avatar</label>
              <input type="file" {...register("avatar")} id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleChangeAvatar} />
              <img id="blah" src="#" onError={handleEmptyAvatar} alt="Preview avatar" ref={imgPreviewElement} className="rounded-full text-center text-transparent" width={150} height={150}/>
            </div>
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-activePurple px-12 py-2 rounded-lg text-xl font-bold text-card">Guardar</button>
            <button type="reset" onClick={handleReset} className="bg-ligthPurple px-12 py-2 rounded-lg text-xl font-bold text-card">Limpiar</button>
          </div>
          </>
        }
      </form>
  );
};

export default EditProfile;
