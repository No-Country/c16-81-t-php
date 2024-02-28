import { useEffect, useState } from 'react'
import styles from '../../../style'
import UsersSelect from '../../../components/Dashboard/UsersSelect'

const CreateTeam = () => {
  const {labelElement, inputElement} = styles
  const [quantity_teammates, setQuantityTeammates] = useState("1")
  const [usersList, setUsersList] = useState([])
  const [teammatesList, setTeammatesList] = useState([])

  const handleQuantityTeammates = (e) => { 
    setQuantityTeammates(Number(e.target.value));    
  }

  useEffect(() => {
    const getUsers = async() => { 
      try {
        const resp = await fetch("http://127.0.0.1:8000/api/users")

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

  useEffect(() => {}, [quantity_teammates])
  useEffect(() => {
    console.log(teammatesList);
  }, [teammatesList])

  return (
    <form id="editProfileForm" className={`min-h-[58vh] flex flex-col gap-y-4 sm:gap-y-12 p-2 sm:p-6 border-2 border-white/30 rounded-lg`}>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col">
            <label htmlFor="name_team" className={`${labelElement}`}>Nombre del equipo</label>
            <input type="text" name="name_team" id="name_team" className={`${inputElement}`} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="quantity_teammates" className={`${labelElement}`}>Cantidad de compañeros</label>
            <input type="number" min={1} max={4} name="quantity_teammates" id="quantity_teammates" onChange={handleQuantityTeammates} className={`${inputElement}`}/>
          </div>
          <div className="flex flex-wrap gap-4 basis-full">
          {
            Array
              .from({length: quantity_teammates}, (v, i) => i)
              .map((teammate, indexTeammate) => (
                <div key={indexTeammate+1} className="flex flex-col">
                  <label htmlFor={indexTeammate+1} className={`${labelElement} `}>Compañero n° {indexTeammate+1}</label>
                  <UsersSelect usersList={usersList}/>
                </div>
              ))
          }
        </div>
          
        </div>
        <div className="flex justify-center sm:justify-between gap-2 sm:px-8">
          <button type='submit'           
                  className={`py-2 sm:py-4 px-6 mt-4 max-w-48 items-center justify-center bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[14px] sm:text-[16px]
                  text-[#18C935] hover:text-green-500 outline-none rounded-[14px] shadow-2xl`}> 
              Guardar
          </button>

          <button type='reset'           
                  className={`py-2 sm:py-4 px-6 mt-4 max-w-48 items-center justify-center bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[14px] sm:text-[16px]
                  text-[#FF5F5F] hover:text-red-500 outline-none rounded-[14px] shadow-2xl`}> 
              Limpiar
          </button>
        </div>
      </form>
  )
}

export default CreateTeam