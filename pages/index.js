import { Card, Header } from '../components'
import { usePokedex } from '../AppContext'

export default function Home() {
  const { list, setLists } = usePokedex()
  console.log(list, 'home')
  const data = list.results
  return (
    <>
      <Header />
      <div className='pt-12'>
        <div className='grid grid-cols-5 gap-5 mt-24 mx-8'>
          {
            data && data.map(list => {

              return <Card desc={list.name} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${list.url.substring(34, list.url.length - 1)}.png`} />
            })
          }
        </div>
      </div>
    </>
  )
}