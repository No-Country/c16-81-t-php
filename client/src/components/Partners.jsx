import { partners } from '../data';
import styles from '../style';

const Partners = () => {
  return (
    <section className={`flex md:flex-row flex-col items-center justify-between ${styles.paddingY} px-6 sm:px-16`}>
        <div>
            <hr className='w-[264px]'/>
            <h2 className='text-[20px]  text-secondary mt-2'>Orgullosos socios y afiliados</h2>
        </div>
        <div className='h[42px] w-fit'>
            <ul className="flex flex-wrap justify-center sm:gap-[60px] sm:gap-y-0">
                {partners.map((partners, index) => (
                <li key={index}>
                    <a
                    href={partners.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full h-full p-4 text-center gap-12"
                    >
                    <img src={partners.icon} alt={partners.id} className='w-[130px]' />
                    </a>
                </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Partners