
const ProgressList = (props) => {
    return (
        <>
            <div className="grid grid-cols-2 w-2/3 gap-7" >
                <div className='text-right font-bold uppercase' >{props.stat.stat.name}</div>
                <div className="flex items-center gap-3"><div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div className="bg-black-pastel  h-4 rounded-full" style={{ "width": `${props.stat.base_stat}%` }}></div>
                </div> <div className="text-md font-bold">{props.stat.base_stat}</div></div></div>
        </>
    )
}


export default ProgressList