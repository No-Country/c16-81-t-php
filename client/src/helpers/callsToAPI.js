

export const verifyAuthorization = async () => {
    const token = localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME);

    try {
      if(!token){
        throw new Error(`El token no fue hallado o no esta almacenado, redireccionando al login`)
      }
      
      const URL_ENVIROMENT = import.meta.env.VITE_URL_LOCAL
      const resp = await fetch(`${URL_ENVIROMENT}/api/verify-token`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          withCredentials: "true",
        },
      });

      const data = await resp.json()
      if(!resp.ok){ throw new Error(data.message) }

      return resp.ok
    } catch (error) {
      console.error(`Error al verificar la autenticacion del usuario: ${error.message}`)
      return false
    }
};