import styles from "../../../style";
import { useRef } from 'react';

const EditProfile = () => {
  const { labelElement, inputElement } = styles
  const imgPreviewElement = useRef(null);

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
      <form id="editProfileForm" className={`min-h-[58vh] flex flex-col gap-y-12 p-6 border-2 border-black rounded-lg`}>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col">
            <label htmlFor="nick_name" className={`${labelElement}`}>Nickname</label>
            <input type="text" name="nick_name" id="nick_name" className={`${inputElement}`} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="first_name" className={`${labelElement}`}>Primer nombre</label>
            <input type="text" name="first_name" id="first_name" className={`${inputElement}`}/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="last_name" className={`${labelElement}`}>Apellido</label>
            <input type="text" name="last_name" id="last_name" className={`${inputElement}`}/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className={`${labelElement}`}>Email</label>
            <input type="email" name="email" id="email" className={`${inputElement}`}/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className={`${labelElement}`}>Telefono</label>
            <input type="tel" name="phone" id="phone" className={`${inputElement}`}/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" id="gender" className={`${labelElement}`}>Genero</label>
            <select
              name="gender"
              className={`${inputElement}`}
            >
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="avatar" className={`${labelElement}`}>Avatar</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleChangeAvatar} />
            <img id="blah" src="#" onError={handleEmptyAvatar} alt="Preview avatar" ref={imgPreviewElement} className="rounded-full text-center text-transparent" width={150} height={150}/>
          </div>
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-activePurple px-12 py-2 rounded-lg text-xl font-bold text-card">Guardar</button>
          <button type="reset" className="bg-ligthPurple px-12 py-2 rounded-lg text-xl font-bold text-card">Limpiar</button>
        </div>
      </form>
  );
};

export default EditProfile;
