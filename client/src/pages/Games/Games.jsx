import { GameCard } from "../../components/Games/GameCard"


const Games = () => {
  return (
    <section className="container mx-auto py-12 xl:px-0 sm:px-16 px-2 mb-16">
        <h1 className="flex-1 font-monse font-bold text-balance ss:text-[52px] text-[30px] text-secondary mb-8">
            Juegos
        </h1>
        <GameCard/>
    </section>
  )
}

export default Games