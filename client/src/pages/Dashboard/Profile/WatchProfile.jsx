import styles from "../../../style"

const WatchProfile = () => {
  const { labelElement, inputElement } = styles
  return (
    <div className={` min-h-[58vh] flex flex-col gap-y-20 p-6 border-2 border-black rounded-lg`}>
        <div className="flex flex-wrap gap-4">
        <img src="https://placehold.co/150x150" alt="profile-avatar" className="rounded-full" width={150} height={150} />
          <div className="flex flex-col">
            <label htmlFor="nick_name" className={`${labelElement}`}>Nickname</label>
            <input type="text" name="nick_name" id="nick_name" disabled className={`${inputElement}`} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="first_name" className={`${labelElement}`}>Primer nombre</label>
            <input type="text" name="first_name" id="first_name" disabled className={`${inputElement}`}/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="last_name" className={`${labelElement}`}>Apellido</label>
            <input type="text" name="last_name" id="last_name" disabled className={`${inputElement}`}/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className={`${labelElement}`}>Email</label>
            <input type="email" name="email" id="email" disabled className={`${inputElement}`}/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className={`${labelElement}`}>Telefono</label>
            <input type="tel" name="phone" id="phone" disabled className={`${inputElement}`}/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" className={`${labelElement}`}>Genero</label>
            <input type="tel" name="gender" id="gender" disabled className={`${inputElement}`}/>
          </div>
        </div>
    </div>
  )
}

export default WatchProfile