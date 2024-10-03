import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { useParams } from "react-router-dom";
import { MenuApi } from '../Utils/constant';

const RestaurantMenu = () => {
    const { resId } = useParams()


    const [resData, setResData] = useState(null)

    const fetchData = async () => {
        const data = await fetch(MenuApi + resId)
        const json = await data.json()
        console.log("json", json.data.cards?.[2].card.card.info)


        setResData(json?.data)
    }

    useEffect(() => {
        fetchData()

    }, [])
    if (resData === null) return <Loader />
    const { name, cloudinaryImageId, cuisines, costForTwoMessage } = resData?.cards?.[2].card.card.info
    const { itemCards } = resData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card
    console.log("itemCards", itemCards);

    // console.log("itemCards", resData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card);

    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines?.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <img src={cloudinaryImageId} />
            <ul>
                <li>
                    {

                        itemCards?.map((items) => <li key={items?.card?.info?.id}>{items?.card?.info?.name}-Rs.{items?.card?.info?.price}</li>)

                    }
                </li>
            </ul>
        </div>
    )
}

export default RestaurantMenu
