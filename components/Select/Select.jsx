import { usePokedex } from '../../AppContext'

const Select = () => {
    const { gender, getListsBasedFilter, getLists } = usePokedex()
    const handleChange = (e) => {
        if (e.target.value === '') {
            getLists(20)
        } else {
            getListsBasedFilter(e.target.value)
        }
    }
    return (
        <div className="mt-8 w-full flex items-center justify-center">
            <select id="countries" className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black-pastel block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-pastel dark:focus:border-black-pastel w-80" defaultValue="" onChange={(e) => handleChange(e)}>
                <option value="">Choose Pokemon Gender</option>
                {
                    gender && gender.map(gd => {
                        return <option key={gd.name} value={gd.url.substring(33, gd.url.length - 1)}>{(gd.name[0].toUpperCase() + gd.name.substring(1))}</option>
                    })
                }
            </select>
        </div>
    )
}


export default Select