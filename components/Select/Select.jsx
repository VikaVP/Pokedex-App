import { usePokedex } from '../../AppContext'

const Select = () => {
    const { type } = usePokedex()
    const handleChange = (e) => {

    }
    return (
        <div className="mt-8 w-full flex items-center justify-center">
            <select id="countries" className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black-pastel block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-pastel dark:focus:border-black-pastel w-80" defaultValue="" onChange={(e) => handleChange(e)}>
                <option >Choose Pokemon Type</option>
                {
                    type && type.map(tp => {
                        return <option key={tp.name} value={tp.url.substring(31, tp.url.length - 1)}>{(tp.name[0].toUpperCase() + tp.name.substring(1))}</option>
                    })
                }
            </select>
        </div>
    )
}


export default Select