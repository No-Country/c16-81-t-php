import { Link } from "react-router-dom"

const TeamCardItem = ({ team }) => {
  const parsedName = (name) => { 
      return (name.length > 15)
      ? name.slice(0, 15).concat('...')
      : name
  }
  return (
    <li className="flex flex-col gap-2 bg-ligthPurple px-3 pt-4 pb-2 rounded-lg h-auto">
      <img src="https://placehold.co/150x150" alt={team.name} width={150} height={100} className="rounded-md" />
      <Link to="#" className="font-semibold block">{parsedName(team.name)}</Link>
      <span className="font-light text-[12px]">{team.integrants.length} Integrantes</span>
    </li>
  )
}

export default TeamCardItem