import { useState , useEffect } from "react";
function ProductsData() {
    const [data , setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://dummyjson.com/products');
                const jsonData = await response.json();
                // console.log(jsonData)
                setData( jsonData.products)
            }
            catch(error){
                console.log(error.message)
                console.log(error.code)
            }  
        }
        fetchData();
    },[])

  return data
}

export default ProductsData