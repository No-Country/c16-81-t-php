import styles from "../../../style"

const ChangePassword = () => {
  const { labelElement, inputElement } = styles

  return (
    <form id="changePasswordForm" className={`min-h-[58vh] flex flex-col justify-between gap-y-20 p-6 border-2 border-black rounded-lg `}>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col">
            <label htmlFor="oldPassword" className={`${labelElement}`}>Contraseña anterior</label>
            <input type="password" name="oldPassword" id="oldPassword" className={`${inputElement}`} />
          </div> 
          <div className="flex flex-col">
            <label htmlFor="newPassword" className={`${labelElement}`}>Contraseña nueva</label>
            <input type="password" name="newPassword" id="newPassword" className={`${inputElement}`} />
          </div> 
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className={`${labelElement}`}>Confirme la contraseña</label>
            <input type="password" name="confirmPassword" id="confirmPassword" className={`${inputElement}`} />
          </div> 
        </div>
        <div className="flex justify-between">
          <button type="submit" className=" bg-activePurple px-12 py-2 rounded-lg text-xl font-bold text-card">Guardar</button>
          <button type="reset" className=" bg-ligthPurple px-12 py-2 rounded-lg text-xl font-bold text-card">No, cancelar</button>
        </div>
      </form>
  )
}

export default ChangePassword