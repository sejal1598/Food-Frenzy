import { useEffect, useState } from "react"
import "../index.css"
import { resObj } from "../Utils/constant"
import ResTaurantContainer from "./ResTaurantContainer"
import { useQuery } from "@tanstack/react-query"
import Loader from "./Loader"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Hook/useOnlineStatus"
function Body() {
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filterValue, setFilterValue] = useState([])
    const onlineStatus = useOnlineStatus()
    const handleTopRated = () => {
        let filteredRestaurant = listOfRestaurant?.filter(restfiter => restfiter?.info?.avgRating > 4.2)
        setListOfRestaurant(filteredRestaurant)

        console.log("filteredRestaurant", filteredRestaurant);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        // return json;

        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setFilterValue(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    // const { data, isLoading, error } = useQuery({
    //     queryKey: ["restaurant"],
    //     queryFn: fetchData,
    //     onSuccess: (data) => {
    //         console.log("Fetched data:", data);
    //         //   setListOfRestaurant(data?.data?.cards || []); // Assuming this is the path to the restaurant list
    //     },
    // });



    const handlesearch = () => {
        const filteredRestaurant = listOfRestaurant?.filter((res) => res?.info.name?.toLowerCase().includes(searchText))

        console.log("filteredRestaurant", filteredRestaurant);
        setFilterValue(filteredRestaurant)
    }
    console.log("ffffffffff", filterValue);


    if (listOfRestaurant?.length === 0) {
        return <Loader />
    }
    console.log("ffffffff0", searchText);
    // const onlineStatus = useOnlineStatus()

    if (onlineStatus === false) return <p>Looks like yor internet connection went wrong</p>
    return (
        <div className="body">

            <div className="filter">

                <input className="input-search" type="text" value={searchText} onChange={((e) => setSearchText(e.target.value))} />
                <button className="search-btn" onClick={handlesearch}>Search</button>
                <button className="filter-btn" onClick={handleTopRated}> Top Rated Restaurant </button>
            </div>
            <div className="res-container">
                {filterValue?.map((restaurant) => <Link to={"/restaurantMenu" + "/" + restaurant?.info?.id}><ResTaurantContainer resData={restaurant} /></Link>)}
                {/* {console.log("restaurant", restaurant)} */}
                {/* {resObj.map(restaurant => <ResTaurantContainer resData={restaurant} />)} */}
            </div>

        </div>
    )
}
export default Body