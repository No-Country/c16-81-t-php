import { useEffect, useState } from "react"
import TeamsList from "../../../components/Dashboard/TeamsList"
import Pagination from "../../../components/Dashboard/Pagination"

const MyTeams = () => {
  const [teams, setTeams ] = useState([])

  useEffect(() => {
    const getTeams = async() => { 
      try {
        const resp = await fetch("http://127.0.0.1:8000/api/teams")

        if(!resp.ok){
          throw new Error('getTeams EXPLODE')
        }

        const teams = await resp.json()
        return teams
      } catch (error) {
        console.error(error)
        return []
      }
    }

    getTeams()
        .then(setTeams)
  }, [])

  return (
    <div className={`min-h-[58vh] w-full flex flex-col justify-between gap-y-30 p-6 border-2 border-black rounded-lg`}>
      { teams.length > 0 && <TeamsList teams={teams} className="w-full flex flex-wrap gap-y-6 gap-x-12"/>}
      { teams.length > 0 && <Pagination className={"flex gap-x-2 mt-10"} />}
    </div>
  )
}

export default MyTeams