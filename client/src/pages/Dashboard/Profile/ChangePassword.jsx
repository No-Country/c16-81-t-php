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
    <form id="changePasswordForm" onSubmit={handleSubmit(onSubmit)} className={`min-h-[58vh] flex flex-col justify-between gap-y-20 p-6 border-2 border-black rounded-lg `}>
        <div className="flex flex-wrap gap-4">
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
        <div className="flex justify-between">
          <button type="submit" className=" bg-activePurple px-12 py-2 rounded-lg text-xl font-bold text-card">Guardar</button>
          <button type="reset" onClick={reset} className=" bg-ligthPurple px-12 py-2 rounded-lg text-xl font-bold text-card">Limpiar</button>
        </div>
      </form>
  )
}

export default ChangePassword