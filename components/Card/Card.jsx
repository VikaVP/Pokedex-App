import { ImageWithFallback } from '../index'
const Card = (props) => {
    return (
        <>
            <div className="w-full bg-light-grey border-none relative shadow-sm rounded-2xl">
                <div className="w-full h-64"
                >
                    <ImageWithFallback src={props.img} fallbackSrc="https://www.bestinshow.co.id/images/image-not-available.png" />
                </div>
                <div className="flex justify-center items-center absolute bottom-0 w-full bg-light-grey-2 h-16">
                    <div className="text-md font-semibold uppercase text-white-pastel ">{props.desc}</div>
                </div>
            </div>
        </>
    )
}


export default Card