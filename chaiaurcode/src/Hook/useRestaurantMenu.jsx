import { useEffect, useState } from 'react';
import { MenuApi } from '../Utils/constant';
const useRestaurantMenu = (resId) => {

    const [resData, setResData] = useState(null)

    useEffect(() => {
        fetchData()

    }, [])
    const fetchData = async () => {
        const data = await fetch(MenuApi + resId)
        const json = await data.json()
        console.log("json", json.data.cards?.[2].card.card.info)


        setResData(json?.data)
    }

    return resData;
}
export default useRestaurantMenu