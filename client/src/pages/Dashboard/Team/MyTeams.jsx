import { useEffect, useState } from "react"
import TeamsList from "../../../components/Dashboard/TeamsList"
import Pagination from "../../../components/Dashboard/Pagination"

const MyTeams = () => {
  const [teams, setTeams ] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const paginatedBy = 8

  useEffect(() => {
    const getTeams = async() => { 
      try {
        const token = localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME)

        const resp = await fetch(`http://127.0.0.1:8000/api/users/leading-teams?page=${currentPage}&paginatedBy=${paginatedBy}`,{
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: "application/json",
            withCredentials: "true",
          },
        })

        const data = await resp.json()
        if(!resp.ok){
          throw new Error(`Ocurrio un error a la hora de conseguir los equipos liderados: ${data.message}`)
        }

        setTotalPages(data.leader_for.last_page)

        return data.leader_for.data
      } catch (error) {
        console.error(error)
        return []
      }
    }

    getTeams()
        .then(setTeams)
        .catch(setTeams)
  }, [currentPage, totalPages])

  return (
    <div className={`min-h-[58vh] w-full flex flex-col justify-between gap-y-30 p-6 border-2 border-white/30 rounded-lg`}>
      { teams.length > 0 &&
        <>
          <TeamsList teams={teams} className="w-full flex flex-wrap gap-y-6 gap-x-12"/>
          <Pagination currentPage={currentPage} setPage={setCurrentPage} totalPages={totalPages} className={"flex gap-x-2 mt-10"} />
        </>
      }
    </div>
  )
}

export default MyTeams