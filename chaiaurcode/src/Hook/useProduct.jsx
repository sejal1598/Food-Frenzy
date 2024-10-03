import { useQuery } from "@tanstack/react-query"
const useProduct = () => {

    const fetchData = async () => {
        const data = await fetch("'https://fakestoreapi.com/products");
        const json = await data.json()
        return json;


    }


    const { data, isLoading, isError, error } = useQuery(
        {
            queryKey: ["product"],
            queryfn: fetchData
        }
    )
    return {
        data, isLoading, isError, error
    }

}
export default useProduct;