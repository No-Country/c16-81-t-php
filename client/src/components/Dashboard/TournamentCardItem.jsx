import { Link } from "react-router-dom"

const TournamentCardItem = ({ tournament }) => {
    const parsedName = (name) => { 
        return (name.length > 15)
        ? name.slice(0, 10).concat('...')
        : name
    }
  return (
    <li className="flex flex-col bg-ligthPurple px-3 pt-4 pb-2 rounded-lg h-auto basis-1/5">
        <img src={tournament.image} alt={tournament.title} width={150} height={100} className="rounded-md" />
        <Link to="#" className="font-semibold block">{parsedName(tournament.name)}</Link>
        <span className="font-light text-[12px] mt-5">{tournament.modality}</span>
    </li>
  )
}

export default TournamentCardItem