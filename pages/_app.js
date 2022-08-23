import '../assets/main.css'
import { PokedexProvider } from "../AppContext";
function MyApp({ Component, pageProps }) {
  return <PokedexProvider
  ><Component {...pageProps} /></PokedexProvider>
}

export default MyApp

