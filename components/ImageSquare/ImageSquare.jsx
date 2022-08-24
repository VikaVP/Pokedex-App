
const ImageSquare = (props) => {
    return (
        <>

            <div className={`flex items-center justify-center w-36 h-36 rounded-lg ${props.index % 5 === 0 ? 'bg-white-pastel' : (props.index % 3 === 0 ? 'bg-black-pastel' : (props.index % 7 === 0 ? 'bg-light-grey-3' : (props.index % 2 === 0 ? 'bg-light-grey-4' : 'bg-grey-pastel')))}`} >
                <img src={props.img} alt="Pokemon" className="w-36" /></div>
        </>
    )
}


export default ImageSquare