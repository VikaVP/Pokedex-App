import { ImageWithFallback } from '../index'
const ImageRounded = (props) => {
    return (
        <>
            <div className="flex items-center justify-center w-40 h-40 rounded-full bg-black-pastel">
                <ImageWithFallback src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id || ''}.svg`} fallbackSrc="https://www.bestinshow.co.id/images/image-not-available.png" />
            </div>
        </>
    )
}


export default ImageRounded