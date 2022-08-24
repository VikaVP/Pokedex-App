
const Badge = (props) => {
    return (
        <>
            <div className={`${props.index % 2 === 0 ? 'bg-grey-pastel text-black-pastel' : 'bg-black-pastel text-grey-pastel'}  text-md font-bold text-center py-2 px-5 rounded-full min-w-max `}>
                {props.name[0].toUpperCase() + props.name.substring(1)}
            </div>
        </>
    )
}


export default Badge