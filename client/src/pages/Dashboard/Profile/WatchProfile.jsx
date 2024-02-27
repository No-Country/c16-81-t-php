import styles from "../../../style"
import { avatar } from "../../../assets";

const WatchProfile = () => {

  const user = {
    src: avatar,
    nick_name: 'john123',
    first_name: 'John',
    last_name: 'Doe',
    phone: '0414 123 54 76',
    gender: 'male',
    email: 'johndoe@gmail.com'   
  };

  const { labelElement, inputElement } = styles
  return (
    <div className={` min-h-[58vh] flex flex-col items-center sm:justify-center gap-y-20 p-6 border-2 border-white/30 rounded-lg`}>
        {/* <div className="flex flex-wrap gap-4">
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
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 items-center gap-y-8 sm:gap-x-8">
            <div className="flex flex-row items-center gap-4">
              <img src={user.src} width={80} height={80} className="w-[80px] h-[80px] sm:w-36 sm:h-36 rounded-full object-cover"/>
              <div className="flex flex-row gap-2">
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl">{user.first_name}</span>
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl">{user.last_name}</span>
              </div>
            </div>    
            <div className="flex flex-col items-center gap-10">      
              <div className="flex flex-col gap-4 sm:gap-6">
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl">Usuario: {" "} {user.nick_name}</span>
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl">Género: {" "} {user.gender}</span>
              </div>
            </div> 
            <div className="flex flex-col sm:flex-row sm:col-span-2 items-center gap-10"> 
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl">Email: {" "} {user.email}</span>
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl">Tlf: {" "} {user.phone}</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default WatchProfile