import React from 'react'
import useProduct from '../Hook/useProduct'

const Test = () => {
    const { isLoading, data } = useProduct()
    console.log("data", data);

    return (
        <div>
            {data.map(product => <div>{product}</div>)}
        </div>
    )
}

export default Test
