import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import styles from '../../../style'
import UsersSelect from '../../../components/Dashboard/UsersSelect'

const CreateTeam = () => {
  const {labelElement, inputElement} = styles
  const [quantity_teammates, setQuantityTeammates] = useState(0)
  const [usersList, setUsersList] = useState([])
  const [teammatesList, setTeammatesList] = useState([])

  const { register, reset, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
        name: "", 
        quantity_teammates: quantity_teammates,
      },
    }
  );

  const handleReset = () => { 
    setQuantityTeammates(0)
    setTeammatesList([])
    reset()
  }

  const onSubmit = async(formDataValues) => {
  
    if( duplicatedTeammates() ){
      alert(`Hay usuarios duplicados, elije compañeros que no se repitan`)
      return
    }

    const sanitizedTeammates = teammatesList.filter(Boolean).length
    if( sanitizedTeammates != quantity_teammates){
      alert('Parece que faltan seleccionar compañeros, revisa si los campos de compañeros seleccionados estan llenos')
      return
    }

    try {
      const token = localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME)
      
      const resp = await fetch("http://127.0.0.1:8000/api/teams", {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: "application/json",
          withCredentials: "true",
        }, 
        body: JSON.stringify({
          name: formDataValues.name,
          teammates: teammatesList.slice(0, quantity_teammates),
        })
      })

      const data = await resp.json()
      if(!resp.ok){ throw new Error(data.message) }

      alert(data.msg)
      reset()
    } catch (error) {
      console.error(error.message);
      alert(error.message)
    }
  }

  const handleQuantityTeammates = (e) => { 
    setQuantityTeammates(Number(e.target.value));    
  }

  useEffect(() => {
    const getUsers = async() => { 
      
      try {
        const token = localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME)

        const resp = await fetch("http://127.0.0.1:8000/api/users", {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: "application/json",
            withCredentials: "true",
          },
        })

        if(!resp.ok){
          throw new Error('getUsers EXPLODE')
        }

        const { data } = await resp.json()
        return data
      } catch (error) {
        console.error(error)
        return []
      }
    }

    getUsers()
        .then(setUsersList)
        .catch(alert)
  }, [])

  const duplicatedTeammates = () => {
    const duplicates = teammatesList.filter((item, index) => teammatesList.indexOf(item) !== index);
    return Array.from(new Set(duplicates)).length > 0;
}

  useEffect(() => {
    setTeammatesList(teammatesList.slice(0, quantity_teammates))
  }, [quantity_teammates])

  useEffect(() => {
    if( duplicatedTeammates() ){
      alert(`Ese usuario ya fue seleccionado, elige otro`)
    }
  }, [teammatesList])

  return (
    <form id="editProfileForm" onSubmit={handleSubmit(onSubmit)} className={`min-h-[58vh] flex flex-col gap-y-12 p-6 border-2 border-black rounded-lg`}>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col">
          <label htmlFor="name_team" className={`${labelElement}`}>Nombre del equipo</label>
          <input type="text" name="name_team" id="name_team"
            className={`${inputElement}`}
            {...register("name", { 
              required: {
                  value: true,
                  message: "El nombre del equipo es requerido",
                }, 
                maxLength: 20, minLength: 4
              })
            }
          />
          {errors.name?.type === "required" && <span className='text-red-500'>El nombre del equipo es requerido</span>}
          {errors.name?.type === "maxLength" && (
            <span className='text-red-500'>El nombre del equipo no debe ser mayor a 20 caracteres</span>
            )}
          {errors.name?.type === "minLength" && (
            <span className='text-red-500'>El nombre del equipo debe ser mayor a 4 caracteres</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity_teammates" className={`${labelElement}`}>Cantidad de compañeros</label>
          <input type="number" min={1} max={4}
            name="quantity_teammates" id="quantity_teammates"
            onChange={handleQuantityTeammates} className={`${inputElement}`}
          />
        </div>
        <div className="flex flex-wrap gap-4 basis-full">
          { usersList.length > 0 &&
            Array
              .from({length: quantity_teammates}, (v, i) => i+1)
              .map((teammate) => (
                <div key={teammate} className="flex flex-col">
                  <label htmlFor={teammate} className={`${labelElement}`}>Compañero n° {teammate}</label>
                  <UsersSelect 
                      usersList={usersList} 
                      teammatesList={teammatesList} 
                      setTeammate={setTeammatesList} 
                      name={`${'selectTeammate'+teammate}`} 
                      id={`${'selectTeammate'+teammate}`}
                      teammate_number={teammate}
                  />
                </div>
              ))
          }
        </div>
        
      </div>
      <div className="flex justify-between">
        <button type="submit" className="bg-activePurple px-12 py-2 rounded-lg text-xl font-bold text-card">Guardar</button>
        <button type="reset" onClick={handleReset} className="bg-ligthPurple px-12 py-2 rounded-lg text-xl font-bold text-card">Limpiar</button>
      </div>
    </form>
  )
}

export default CreateTeam