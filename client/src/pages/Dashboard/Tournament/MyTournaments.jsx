import { useEffect, useState } from "react"
import TournamentsList from "../../../components/Dashboard/TournamentsList"
import Pagination from "../../../components/Dashboard/Pagination"

// Para controlar el paginado https://v5.reactrouter.com/web/example/query-parameters

const MyTournaments = () => {
  const [tournaments, setTournaments ] = useState([])

  useEffect(() => {
    const getTournaments = async() => { 
      try {
        const resp = await fetch("http://127.0.0.1:8000/api/tournaments")

        if(!resp.ok){
          throw new Error('getTournaments EXPLODE')
        }

        const { tournaments } = await resp.json()
        return tournaments
      } catch (error) {
        console.error(error)
        return []
      }
    }

    getTournaments()
        .then(setTournaments)
  }, [])

  return (
    <div className={`min-h-[58vh] w-full flex flex-col justify-between gap-y-30 p-6 border-2 border-white/30 rounded-lg`}>
      { tournaments.length > 0 && <TournamentsList tournaments={tournaments} className="w-full flex flex-wrap gap-y-6 gap-x-12"/>}
      { tournaments.length > 0 && <Pagination className={"flex gap-x-2"} />}
    </div>
  )
}

export default MyTournaments