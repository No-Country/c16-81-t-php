const URL_ENVIROMENT = import.meta.env.VITE_URL_LOCAL

export const verifyAuthorization = async () => {
    const token = localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME);

    try {
      if(!token){
        throw new Error(`El token no fue hallado o no esta almacenado, redireccionando al login`)
      }
            
      const resp = await fetch(`${URL_ENVIROMENT}/api/verify-token`, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json",
          "withCredentials": true,
        },
      });

      const data = await resp.json()
      if(!resp.ok){ throw new Error(data.message) }

      // Guardar el ID del usuario actual en el localStorage
      // localStorage.setItem('currentUserId', data.id);

      return data
    } catch (error) {
      console.error(`Error al verificar la autenticacion del usuario ${error.message}`)
      localStorage.removeItem(import.meta.env.VITE_USER_TOKEN_NAME)
      window.dispatchEvent(new Event('storage'));
      return null
    }
};

export const getTournamentById = async (tournamentId) => {
  try {

    const resp = await fetch(`${URL_ENVIROMENT}apitournaments${tournamentId}`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "withCredentials": true,
      },
    });

    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.message);  
    }

    return data.tournament
  } catch (error) {
    console.error( `Error al traer datos del torneo ${error.message}`);

    return null
  }
};