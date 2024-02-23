import TeamCardItem from "./TeamCardItem"

const TeamsList = ({ className, teams }) => {    
  return (
    <ul className={`${className}`}>
        {teams.map((team, index) => (
            <TeamCardItem key={index} team={team}/>
        ))}
    </ul>
  )
}

export default TeamsList