import { Link } from "react-router-dom"

const TeamCardItem = ({ team }) => {
  const parsedName = (name) => { 
      return (name.length > 15)
      ? name.slice(0, 15).concat('...')
      : name
  }
  return (
    <li className="flex flex-col bg-ligthPurple px-3 pt-4 pb-2 rounded-lg h-auto basis-1/5">
        <img src="https://placehold.co/150x150" alt={team.name} width={150} height={100} className="rounded-md" />
        <Link to="#" className="font-semibold block">{parsedName(team.name)}</Link>
        <span className="font-light text-[12px] mt-5">{team.integrants.length} integrantes</span>
    </li>
  )
}

export default TeamCardItem