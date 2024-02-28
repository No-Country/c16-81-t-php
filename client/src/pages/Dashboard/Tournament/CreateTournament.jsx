import { useRef } from 'react'
import styles from '../../../style'

const CreateTournament = () => {
  const { labelElement, inputElement } = styles
  const imgPreviewElement = useRef(null);

  const handleChangeImage = (e) => { 
    const [avatar] = e.target.files
    if (avatar) {
      imgPreviewElement.current.classList.remove('hidden')
      imgPreviewElement.current.src = URL.createObjectURL(avatar)
    }
  }

  const handleEmptyImage = (e) => { 
    e.target.classList.add('hidden');
  }

  return (
    <form id="createTournament" className={`min-h-[58vh] flex flex-col gap-y-4 sm:gap-y-12 p-2 sm:p-6 border-2 border-white/30 rounded-lg`}>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col basis-1/3">
            <label htmlFor="tournament_name" className={`${labelElement}`}>Nombre del torneo</label>
            <input type="text" name="tournament_name" id="tournament_name" className={`${inputElement}`} />
          </div>
          <div className="flex flex-col basis-1/3">
            <label htmlFor="videogame" id="videogame" className={`${labelElement}`}>Juego</label>
            <select
              name="videogame"
              className={`${inputElement}`}
            >
              {/* Cargar desde la BD */}
              <option value="PUBG mobile">PUBG mobile</option>
              <option value="Brawl Stars">Brawl Stars</option>
              <option value="Clash royale">Clash royale</option>
            </select>
          </div>
          <div className="flex flex-col basis-1/4">
            <label htmlFor="starts_the" className={`${labelElement}`}>Comienza el dia...</label>
            <input type="datetime-local" name="starts_the" id="starts_the" className={`${inputElement} w-[211px] sm:w-auto`}/>
          </div>
          <div className="flex flex-col basis-1/5">
            <label htmlFor="quantity_teams" className={`${labelElement}`}>Cantidad de equipos</label>
            <input type="number" min={8} max={16} step={8} name="quantity_teams" id="quantity_teams" className={`${inputElement}`}/>
          </div>
          
          <div className="flex flex-col basis-1/6">
            <label htmlFor="modality" id="modality" className={`${labelElement}`}>Modalidad</label>
            <select
              name="modality"
              className={`${inputElement}`}
            >
              <option value="1v1">1v1</option>
              <option value="2v2">2v2</option>
              <option value="3v3">3v3</option>
              <option value="4v4">4v4</option>
              <option value="5v5">5v5</option>
            </select>
          </div>
          <div className="flex flex-col basis-2/4">
            <label htmlFor="link_ingame" className={`${labelElement}`}>Link en el juego (opcional)</label>
            <input type="tel" name="link_ingame" id="link_ingame" className={`${inputElement}`}/>
          </div>
          <div className="flex flex-col gap-y-2 overflow-x-auto">
            <label htmlFor="image" className={`${labelElement}`}>Imagen/Preview</label>
            <input type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={handleChangeImage} />
            <img id="blah" src="#" onError={handleEmptyImage} alt="Preview tournament image" ref={imgPreviewElement} className="rounded-xl" width={150} height={150}/>
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

export default CreateTournament