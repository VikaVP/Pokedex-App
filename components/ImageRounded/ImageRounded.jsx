
const ImageRounded = (props) => {
    return (
        <>
            <div className="flex items-center justify-center w-40 h-40 rounded-full bg-black-pastel">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id || ''}.svg`} alt="Pokemon" className="w-full" />
            </div>
        </>
    )
}


export default ImageRounded