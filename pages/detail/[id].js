import { Header, ImageSquare, ImageRounded, Badge, ProgressList, Footer } from '../../components'
import { usePokedex } from '../../AppContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router';


export default function Detail() {
  const { getSinglePokemon, singlePokemon } = usePokedex()
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (!isReady) return;
    getSinglePokemon(query.id)
  }, [isReady, singlePokemon])



  return (
    <>
      {singlePokemon &&

        <>
          <Header />
          <div className='pt-12 pb-10 bg-gradient-to-tr from-white-pastel to-white'>
            <div className="flex items-center flex-col justify-center gap-6 mt-10">
              <ImageRounded id={singlePokemon.id || ''} />
              <div className=" text-black-pastel text-2xl font-bold text-center py-2 px-5 uppercase">
                {singlePokemon.name}
              </div>
              <div className="flex w-2/3 items-center justify-center gap-6">
                {singlePokemon.types && singlePokemon.types.map((tp, index) => {
                  return <Badge key={index} index={index} name={tp.type.name} />
                })}
              </div>

              {singlePokemon.stats && singlePokemon.stats.map((stat, index) => {
                return <ProgressList key={index} stat={stat} />
              })}
              <div className='flex gap-10 mt-5 flex-col'>
                <div className="text-lg font-bold text-center">Sprites Galleries</div>
                <div className='grid lg:grid-cols-7 md:grid-cols-7 xs:grid-cols-1 sm:grid-cols-2 gap-5 '>
                  {
                    singlePokemon.img && singlePokemon.img.map((img, index) => {

                      return <ImageSquare key={index} img={img} index={index} />
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      }

    </>
  )
}