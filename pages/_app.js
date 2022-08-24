import '../assets/main.css'
import { PokedexProvider } from "../AppContext";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return <PokedexProvider
  > <Head>
      <meta charSet="UTF-8" />
      <title>Pokedex App</title>
      <meta name="keywords" content="Pokedex App" />
      <meta name="author" content="Vika Vitaloka Pramansah" />
      <meta name="description" content="Pokedex App - Pokemen Lists" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head><Component {...pageProps} /></PokedexProvider>
}

export default MyApp

