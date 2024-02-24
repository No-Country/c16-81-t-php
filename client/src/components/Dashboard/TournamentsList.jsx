import TournamentCardItem from "./TournamentCardItem"

const TournamentsList = ({ className, tournaments }) => {    
  return (
    <ul className={`${className}`}>
        {tournaments.map((tournament, index) => (
            <TournamentCardItem key={index} tournament={tournament}/>
        ))}
    </ul>
  )
}

export default TournamentsList