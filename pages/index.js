import { Card, Header, Select, Spinner } from '../components'
import { usePokedex } from '../AppContext'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const { list, setLists, getLists, getListsBasedFilter, filtered, loader } = usePokedex()
  const data = list.results

  const isInViewport = () => {
    if (!filtered) {
      let limit = list.results !== undefined ? (list.results.length + 20) : 0
      const spinner = document.querySelector('.spinner');
      const rect = spinner.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
        getLists(limit)

      }
    }
  }

  useEffect(() => {

    window.addEventListener('scroll', isInViewport, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', isInViewport);
    };
  }, [list]);

  return (
    <>
      <Header />
      <div className='pt-12 bg-gradient-to-tr from-light-grey-4 to-white'>
        <Select />
        {
          loader && <Spinner className="my-5" />
        }
        <div className='grid lg:grid-cols-5 md:grid-cols-5 xs:grid-cols-1 sm:grid-cols-2 gap-5 mt-24 mx-8'>
          {
            data && data.map(list => {

              return <Link href={`/detail/${list.url.substring(34, list.url.length - 1)}`} key={list.name}><a><Card desc={list.name} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${list.url.substring(filtered ? 42 : 34, list.url.length - 1)}.svg`} /></a></Link>
            })
          }
        </div>
      </div>
      {
        !filtered && <Spinner />
      }

    </>
  )
}