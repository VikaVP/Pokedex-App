import { Card, Header, Spinner } from '../components'
import { usePokedex } from '../AppContext'
import { useEffect, useState } from 'react'

export default function Home() {
  const { list, setLists, getLists } = usePokedex()
  console.log(list, 'home')
  const data = list.results

  const handleScroll = () => {

    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight

    if (bottom) {
      console.log('at the bottom');
      getLists()
    }
  };


  const isInViewport = () => {
    let limit = list.results !== undefined ? (list.results.length + 20) : 0
    console.log('length')
    const spinner = document.querySelector('.spinner');
    const rect = spinner.getBoundingClientRect();
    console.log(rect, 'gghgbh')
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      // isInViewport(spinner) && 
      console.log('if')
      getLists(limit)

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
      <div className='pt-12'>
        <div className='grid grid-cols-5 gap-5 mt-24 mx-8'>
          {
            data && data.map(list => {

              return <Card desc={list.name} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${list.url.substring(34, list.url.length - 1)}.png`} key={list.name} />
            })
          }
        </div>
      </div>
      <Spinner />
    </>
  )
}