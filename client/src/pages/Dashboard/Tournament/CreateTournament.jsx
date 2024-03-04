import { useEffect, useRef, useState } from 'react'
import styles from '../../../style' 
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CreateTournament = () => {
  const { labelElement, inputElement } = styles
  const imgPreviewElement = useRef(null);
  const [videogames, setVideogames] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getVideogames = async() => { 
      try {
        const resp = await fetch("http://127.0.0.1:8000/api/videogames");
        const data = await resp.json()
        if(!resp.ok){ throw new Error(data.message) }

        return data.videogames.data
      } catch (error) {
        console.error(`Error al verificar la autenticacion del usuario: ${error.message}`)
        return []
      }
    }

    getVideogames()
        .then(setVideogames)
        .catch(setVideogames)
  }, [])
  
  const { register, reset, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
        name: "",
        quantity_teams: "8",
        starts_the: "",
        link_ingame: "",
        image: "",
        videogame_id: "",
        modality: "",
      },
    }
  );

  const onSubmit = async(formDataValues) => {
    try {
      const token = localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME)

      const resp = await fetch("http://127.0.0.1:8000/api/tournaments", {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: "application/json",
          withCredentials: "true",
        }, 
        body: JSON.stringify(formDataValues)
      })

      const data = await resp.json()
      if(!resp.ok){ throw new Error(data.message)}
      
      alert(data.msg)
      
      reset()
      navigate('/dashboard/torneos/mis-torneos')
    } catch (error) {
      console.error(error.message)
      alert(error.message)
    }
  }

  const handleChangeImage = (e) => { 
    const [avatar] = e.target.files
    console.log(avatar);
    if (avatar) {
      imgPreviewElement.current.classList.remove('hidden')
      imgPreviewElement.current.src = URL.createObjectURL(avatar)
    }
  }

  const handleEmptyImage = (e) => { 
    e.target.classList.add('hidden');
  }

  return (
    <form id="createTournament"  onSubmit={handleSubmit(onSubmit)} className={`min-h-[58vh] flex flex-col gap-y-4 sm:gap-y-12 p-2 sm:p-6 border-2 border-white/30 rounded-lg`}>
        <div className="flex flex-wrap gap-4 justify-start items-center sm:justify-normal">
          <div className="flex flex-col basis-1/3">
            <label htmlFor="name" className={`${labelElement}`}>Nombre del torneo</label>
            <input type="text" name="name" id="name" className={`${inputElement}`}
              {...register("name", { 
                required: {
                  value: true,
                  message: "El nombre del torneo es requerido",
                }, 
                maxLength: 20, minLength: 4
              })
            }
            />
            {errors.name?.type === "required" && <span className='text-red-500'>El nombre del torneo es requerido</span>}
            {errors.name?.type === "maxLength" && (
            <span className='text-red-500'>El nombre del torneo no debe ser mayor a 12 caracteres</span>
            )}
            {errors.name?.type === "minLength" && (
            <span className='text-red-500'>El nombre del torneo debe ser mayor a 2 caracteres</span>
            )}
          </div>
          <div className="flex flex-col basis-1/3">
            <label htmlFor="videogame_id" id="videogame_id" className={`${labelElement}`}>Juego</label>
            <select name="videogame_id" className={`${inputElement} w-[211px] sm:w-auto`}
              {...register("videogame_id", { 
                  required: {
                    value: true,
                    message: "El juego es requerido",
                  },
                })
              }
            >
              <option value="">Seleccione un juego</option>
              {
                videogames.length > 0 &&
                videogames.map((videogame, index) => (
                  <option key={index} value={videogame.id}>{videogame.name}</option>
                ))
              }
            </select>
            {errors.videogame_id?.type === "required" && <span className='text-red-500'>El juego es requerido</span>}
          </div>
          
          <div className="flex flex-col basis-1/4">
            <label htmlFor="starts_the" className={`${labelElement}`}>Comienza el dia...</label>
            <input type="datetime-local" name="starts_the" id="starts_the" className={`${inputElement} w-[211px] sm:w-auto`}
              {...register("starts_the", {
                required: {
                  value: true,
                  message: "La fecha de comienzo es requerida",
                }
              })
            }
            />
            {errors.starts_the?.type === "required" && <span className='text-red-500'>La fecha de comienzo es requerida</span>}
          </div>

          <div className="flex flex-col ">
            <label htmlFor="quantity_teams" className={`${labelElement}`}>Cantidad de equipos</label>
            <input type="number" min={8} max={16} step={8} name="quantity_teams" id="quantity_teams" className={`${inputElement} w-[150px]`}
              {...register("quantity_teams")
            }
            />
          </div>
          
          <div className="flex flex-col basis-1/6">
            <label htmlFor="modality" id="modality" className={`${labelElement}`}>Modalidad</label>
            <select name="modality" className={`${inputElement} w-[211px] sm:w-auto`}
              {...register("modality", {
                  required: {
                    value: true,
                    message: "La modalidad es requerida",
                  } 
                })
              }
            >
              <option value="">Seleccione una modalidad</option>
              <option value="1v1">1v1</option>
              <option value="2v2">2v2</option>
              <option value="3v3">3v3</option>
              <option value="4v4">4v4</option>
              <option value="5v5">5v5</option>
            </select>
            {errors.modality?.type === "required" && <span className='text-red-500'>La modalidad es requerida</span>}
          </div>
          <div className="flex flex-col basis-2/4">
            <label htmlFor="link_ingame" className={`${labelElement}`}>Link en el juego (opcional)</label>
            <input type="text" name="link_ingame" id="link_ingame" className={`${inputElement}`} {...register("link_ingame")}/>
          </div>
          <div className="flex flex-col gap-y-2 overflow-x-auto">
              <label htmlFor="image" className={`${labelElement} mb-0`}>Imagen/Preview</label>
              <input type="file" /* {...register("image")} */ id="image" name="image" accept="image/png, image/jpeg" onChange={handleChangeImage} className='rounded-lg bg-secondary' />
              <img id="previewImage" src="#" onError={handleEmptyImage} alt="Preview image" ref={imgPreviewElement} className="rounded-full text-center text-transparent" width={150} height={150}/>
          </div>
                    
        </div>
        <div className="flex justify-center sm:justify-between gap-2 sm:px-8">
          <button type='submit'           
                  className={`py-2 sm:py-4 px-6 mt-4 max-w-48 items-center justify-center bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[14px] sm:text-[16px]
                  text-[#18C935] hover:text-green-500 outline-none rounded-[14px] shadow-2xl`}> 
              Guardar
          </button>

          <button type='reset' onClick={reset}           
                  className={`py-2 sm:py-4 px-6 mt-4 max-w-48 items-center justify-center bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[14px] sm:text-[16px]
                  text-[#FF5F5F] hover:text-red-500 outline-none rounded-[14px] shadow-2xl`}> 
              Limpiar
          </button>
        </div>
      </form>
  )
}

export default CreateTournament