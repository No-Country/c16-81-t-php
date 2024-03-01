import { avatar } from "../../../assets";
import { useEffect, useState } from "react";

const WatchProfile = () => {

  // const user = {
  //   src: avatar,
  //   nick_name: 'john123',
  //   first_name: 'John',
  //   last_name: 'Doe',
  //   phone: '0414 123 54 76',
  //   gender: 'male',
  //   email: 'johndoe@gmail.com'   
  // };

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const token = localStorage.getItem(
          import.meta.env.VITE_USER_TOKEN_NAME
        );

        const resp = await fetch("http://127.0.0.1:8000/api/verify-token", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            withCredentials: "true",
          },
        });

        const data = await resp.json();
        if (!resp.ok) {
          throw new Error(data.message);
        }

        return data;
      } catch (error) {
        console.error(
          `Error al traer datos del perfil del usuario: ${error.message}`
        );
        return null;
      }
    };

    getUserInfo()
        .then(setUserInfo)
        .catch(setUserInfo)

  }, []);

  return (
    <div className={` min-h-[58vh] flex flex-col items-center sm:justify-center gap-y-20 p-6 border-2 border-white/30 rounded-lg`}>
      {
        userInfo &&
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 items-center gap-y-8 sm:gap-x-8">
            <div className="flex flex-row items-center gap-4">
              <img src={avatar} width={80} height={80} className="w-[80px] h-[80px] sm:w-36 sm:h-36 rounded-full object-cover"/>
              <div className="flex flex-row gap-2">
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl">{userInfo.first_name}</span>
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl">{userInfo.last_name}</span>
              </div>
            </div>    
            <div className="flex flex-col items-center gap-10">      
              <div className="flex flex-col gap-4 sm:gap-6">
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl"><u>Usuario:</u> {userInfo.nick_name}</span>
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl"><u>Género:</u> {userInfo.gender}</span>
              </div>
            </div> 
            <div className="flex flex-col sm:flex-row sm:col-span-2 items-center gap-10"> 
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 ">
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl break-all"><u>Email:</u> {userInfo.email}</span>
                <span className="font-monse font-bold text-secondary text-[18px] sm:text-2xl"><u>Tel.:</u> {userInfo.phone}</span>
              </div>
            </div>
        </div>
      }
    </div>
  )
}

export default WatchProfile;
