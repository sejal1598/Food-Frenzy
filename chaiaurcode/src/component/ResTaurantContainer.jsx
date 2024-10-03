import "../index.css"
import { cloudaryImage } from "../Utils/constant";

function ResTaurantContainer({ resData }) {

    // const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.card?.card.gridElements?.infoWithStyle?.restaurants
    return (
        <div className="res-card" >
            <img
                className="res-logo"
                src={
                    cloudaryImage +
                    (resData?.info?.cloudinaryImageId || "")
                }
            />

            <h3>{resData?.info?.name}</h3>
            {/* {console.log("sejalll", resData?.data?.name)} */}

            <h4>{resData?.info?.cuisines.join(",")}</h4>
            <h4>{resData?.info?.avgRating}</h4>
            <h4>{resData?.info?.costForTwo}</h4>
            <h4>{resData?.info?.sla?.deliveryTime} Minutes</h4>

            {/* <img
                className="res-logo"
                src={
                    cloudaryImage +
                    (resData?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.cloudinaryImageId || "")
                }
            />

            <h3>{resData?.card?.card.gridElements?.infoWithStyle?.restaurants[0]?.info?.name}</h3>
            <h4>{resData?.card?.card.gridElements?.infoWithStyle?.restaurants[0]?.info?.cuisines.join(",")}</h4>
            <h4>{resData?.card?.card.gridElements?.infoWithStyle?.restaurants[0]?.info?.avgRating}</h4>
            <h4>{resData?.card?.card.gridElements?.infoWithStyle?.restaurants[0]?.info?.costForTwo}</h4>
            <h4>{resData?.card?.card.gridElements?.infoWithStyle?.restaurants[0]?.info?.sla?.deliveryTime} Minutes</h4>
            <img
                className="res-logo"
                src={
                    cloudaryImage +
                    (resData?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.cloudinaryImageId || "")
                }
            />

            <h3>{resData?.card?.card.gridElements?.infoWithStyle?.restaurants[2]?.info?.name}</h3>
            <h4>{resData?.card?.card.gridElements?.infoWithStyle?.restaurants[2]?.info?.cuisines.join(",")}</h4>
            <h4>{resData?.card?.card.gridElements?.infoWithStyle?.restaurants[2]?.info?.avgRating}</h4>
            <h4>{resData?.card?.card.gridElements?.infoWithStyle?.restaurants[2]?.info?.costForTwo}</h4>
            <h4>{resData?.card?.card.gridElements?.infoWithStyle?.restaurants[2]?.info?.sla?.deliveryTime} Minutes</h4>

 */}

        </div>

    )
}
export default ResTaurantContainer