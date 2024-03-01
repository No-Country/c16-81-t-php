import RankTable from '../../components/Ranking/RankTable'

const Ranking = () => {
  return (
    <section className="container mx-auto py-12 xl:px-0 sm:px-16 px-2 mb-16">
        <h1 className="flex-1 font-monse font-bold text-balance text-[24px] md:text-[30px] text-secondary mb-8">
            Tabla de posiciones
        </h1>
        <div className="backdrop-blur-sm bg-white/30 shadow-lg rounded-2xl w-auto p-5">
          <RankTable/>
        </div>
    </section>
  )
}

export default Ranking