import Link from 'next/link'

const Header = () => {
    return (
        <>
            <nav className="fixed flex z-50 w-full h-14 bg-grey-pastel items-center justify-center text-2xl font-extrabold gap-2">
                <Link href="/"><a><span className="text-white-pastel">Pokedex</span><span className="text-black-pastel"> App</span></a></Link>
            </nav>
        </>
    )
}

export default Header