import { useState } from "react"
import "../index.css"
import { resObj } from "../Utils/constant"
import ResTaurantContainer from "./ResTaurantContainer"

function Body() {
    const [listOfRestaurant, setListOfRestaurant] = useState([{
        data: {

            "id": "73611",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",

            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.8,
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "deliveryTime": 29,

        }
    },
    {
        data: {

            "id": "73612",
            "name": "PizzaHut",
            "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",

            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.7,
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "deliveryTime": 29,
        }
    },
    {
        data: {

            "id": "73621",
            "name": "Dominos",
            "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",

            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.6,
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "deliveryTime": 29,

        }
    },
    ])
    // const listOfRestaurant = [{
    //     data: {

    //         "id": "73611",
    //         "name": "NIC Ice Creams",
    //         "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",

    //         "costForTwo": "₹120 for two",
    //         "cuisines": [
    //             "Ice Cream",
    //             "Desserts"
    //         ],
    //         "avgRating": 4.8,
    //         "avgRatingString": "4.6",
    //         "totalRatingsString": "10K+",
    //         "deliveryTime": 29,

    //     }
    // },
    // {
    //     data: {

    //         "id": "73612",
    //         "name": "PizzaHut",
    //         "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",

    //         "costForTwo": "₹120 for two",
    //         "cuisines": [
    //             "Ice Cream",
    //             "Desserts"
    //         ],
    //         "avgRating": 4.7,
    //         "avgRatingString": "4.6",
    //         "totalRatingsString": "10K+",
    //         "deliveryTime": 29,
    //     }
    // },
    // {
    //     data: {

    //         "id": "73621",
    //         "name": "Dominos",
    //         "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",

    //         "costForTwo": "₹120 for two",
    //         "cuisines": [
    //             "Ice Cream",
    //             "Desserts"
    //         ],
    //         "avgRating": 4.6,
    //         "avgRatingString": "4.6",
    //         "totalRatingsString": "10K+",
    //         "deliveryTime": 29,

    //     }
    // },
    // ]
    const handleTopRated = () => {
        let filteredRestaurant = listOfRestaurant?.filter(restfiter => restfiter?.data?.avgRating > 4.6)
        setListOfRestaurant(filteredRestaurant)
        console.log("restaurantFilter", restaurantFilter);
    }


    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn" onClick={handleTopRated}> Top Rated Restaurant </button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((restaurant) => <ResTaurantContainer resData={restaurant} />)}

                {/* {resObj.map(restaurant => <ResTaurantContainer resData={restaurant} />)} */}
            </div>

        </div>
    )
}
export default Body