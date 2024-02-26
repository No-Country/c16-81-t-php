import { useEffect, useState } from "react";
import styles from "../../../style";

const WatchProfile = () => {
  const { labelElement, inputElement } = styles;
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
    <div
      className={` min-h-[58vh] flex flex-col gap-y-20 p-6 border-2 border-black rounded-lg`}
    > 
    {
      userInfo &&
      <div className="flex flex-wrap gap-4">
        <img
          src="https://placehold.co/150x150"
          alt="profile-avatar"
          className="rounded-full"
          width={150}
          height={150}
        />
        <div className="flex flex-col">
          <label htmlFor="nick_name" className={`${labelElement}`}>
            Nickname
          </label>
          <input
            type="text"
            name="nick_name"
            id="nick_name"
            disabled
            value={userInfo?.nick_name}
            className={`${inputElement}`}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="first_name" className={`${labelElement}`}>
            Primer nombre
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            disabled
            value={userInfo?.first_name}
            className={`${inputElement}`}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="last_name" className={`${labelElement}`}>
            Apellido
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            disabled
            value={userInfo?.last_name}
            className={`${inputElement}`}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className={`${labelElement}`}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            disabled
            value={userInfo?.email}
            className={`${inputElement}`}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className={`${labelElement}`}>
            Telefono
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            disabled
            value={userInfo?.phone}
            className={`${inputElement}`}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender" className={`${labelElement}`}>
            Genero
          </label>
          <input
            type="tel"
            name="gender"
            id="gender"
            disabled
            value={userInfo?.gender}
            className={`${inputElement}`}
          />
        </div>
      </div>
    }
    </div>
  );
};

export default WatchProfile;
