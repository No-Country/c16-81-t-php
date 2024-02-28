import styles from "../../../style"

const ChangePassword = () => {
  const { labelElement, inputElement } = styles

  return (
    <form id="changePasswordForm" className={`min-h-[58vh] flex flex-col gap-y-4 sm:gap-y-20 p-2 sm:p-6 border-2 border-white/30  rounded-lg `}>
        <div className="flex flex-wrap gap-4 justify-center sm:justify-normal">
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
        <div className="flex justify-center sm:justify-between gap-2 sm:px-8">
          <button type='submit'           
                    className={`py-2 sm:py-4 px-6 mt-4 max-w-48 items-center justify-center bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[14px] sm:text-[16px]
                    text-[#18C935] hover:text-green-500 outline-none rounded-[14px] shadow-2xl`}> 
                Guardar
          </button>

          <button type='reset'           
                    className={`py-2 sm:py-4 px-6 mt-4 max-w-48 items-center justify-center bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[14px] sm:text-[16px]
                    text-[#FF5F5F] hover:text-red-500 outline-none rounded-[14px] shadow-2xl`}> 
                Cancelar
          </button>        
        </div>
      </form>
  )
}

export default ChangePassword