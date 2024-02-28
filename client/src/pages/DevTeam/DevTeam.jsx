import React from 'react'
import TeamGroup from '../../components/DevTeam/TeamGroup'

const DevTeam = () => {
  return (
    <section className="container mx-auto py-12 xl:px-0 sm:px-16 px-2 mb-16">
        <h1 className="flex-1 font-monse font-bold text-balance ss:text-[30px] text-[24px] text-secondary mb-8">
            Equipo de desarrollo
        </h1>
        <TeamGroup />
    </section>
  )
}

export default DevTeam