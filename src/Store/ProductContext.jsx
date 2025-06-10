// import axios from 'axios';
// import React, { Children } from 'react'
// import { createContext, useEffect,useState } from 'react'
// const ProductContext = createContext();
// export const ProductProvide = ({Children}) =>{
//     const [items,setItems] = useState(false)
//     const [isLaoding, setLoading] = useState(false)

//     useEffect (() => {
//         const fetchApi = async () => {
//             //get, post,put/patch,delete
//             //crud
//             try{
//                 setisLoading(true)
//                 const res = await axios.get('https://product-server-json.onrender.com/products');
//                 console.table(res.data);
//                 setItems(res.data)
//             }
//             catch(e){
//                 console.log(e.message);
//             }
//             finally {
//                 setisLoading(false);
//             }
//     }

//     fetchApi();

// },[])

// return (
//     <ProductContext.Provider value={{items,isLaoding}}/>
//         {Children}
//     <ProductContext.Provider/>
//     )



// export default ProductContext
