import styles from "../../../style"

import { useForm } from 'react-hook-form';

const ChangePassword = () => {
  const { labelElement, inputElement } = styles

  const { register, reset, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
        old_password: "", //"testingPassword123",
        new_password: "", //"newTestingPasswordABC",
        confirm_password: "", //"newTestingPasswordABC",
      },
    }
  );
  const onSubmit = (data) => {
    console.log(data);
    const confirmPasswordMatch = data.new_password === data.confirm_password
    if(!confirmPasswordMatch){
      alert('La confirmacion de contraseña no coincide con la contraseña nueva especificada')
    }
  }


  return (
    <form id="changePasswordForm"  onSubmit={handleSubmit(onSubmit)} className={`min-h-[58vh] flex flex-col gap-y-4 sm:gap-y-20 p-2 sm:p-6 border-2 border-white/30  rounded-lg `}>
        <div className="flex flex-wrap gap-4 justify-center sm:justify-normal">
          <div className="flex flex-col">
            <label htmlFor="old_password" className={`${labelElement}`}>Contraseña anterior</label>
            <input type="password" name="old_password" id="old_password" className={`${inputElement}`}
            {...register("old_password", {
              required: {
                  value: true,
                  message: "La contraseña anterior es requerida",
                }
              })
            }
            />
            {errors.old_password?.type === "required" && <span className='text-red-500'>La contraseña anterior es requerida</span>}

          </div> 
          <div className="flex flex-col">
            <label htmlFor="new_password" className={`${labelElement}`}>Contraseña nueva</label>
            <input type="password" name="new_password" id="new_password" className={`${inputElement}`}
              {...register("new_password", {
                required: {
                    value: true,
                    message: "La contraseña nueva es requerida",
                  }, 
                  maxLength: 20, minLength: 4
                })
              }
            />
            {errors.new_password?.type === "required" && <span className='text-red-500'>La contraseña nueva es requerida</span>}
            {errors.new_password?.type === "maxLength" && (
            <span className='text-red-500'>La contraseña nueva no debe ser mayor a 20 caracteres</span>
            )}
            {errors.new_password?.type === "minLength" && (
            <span className='text-red-500'>La contraseña nueva debe ser mayor a 4 caracteres</span>
            )}
          </div> 
          <div className="flex flex-col">
            <label htmlFor="confirm_password" className={`${labelElement}`}>Confirme la contraseña</label>
            <input type="password" name="confirm_password" id="confirm_password" className={`${inputElement}`}
              {...register("confirm_password", {
                required: {
                    value: true,
                    message: "La confirmacion es requerida",
                  }, 
                  maxLength: 20, minLength: 4
                })
              }
            />
            {errors.confirm_password?.type === "required" && <span className='text-red-500'>La confirmacion es requerida</span>}
            {errors.confirm_password?.type === "maxLength" && (
            <span className='text-red-500'>La confirmacion no debe ser mayor a 20 caracteres</span>
            )}
            {errors.confirm_password?.type === "minLength" && (
            <span className='text-red-500'>La confirmacion debe ser mayor a 4 caracteres</span>
            )}
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
                Cancelar
          </button>        
        </div>
      </form>
  )
}

export default ChangePassword