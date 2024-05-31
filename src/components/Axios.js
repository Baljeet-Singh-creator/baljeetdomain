// import React,{useEffect, useState} from "react";
// import axios from 'axios'


// export default function Axios() {
//     const[myData,setMyData]=useState([])
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//             setMyData(res.data)
//         })
//     },[])

//     // axios.interceptors.request.use(
//     //   (config) => {
//     //     Object.assign(config.headers, { test: '1212' });
//     //     console.log(config);
//     //     return config;
//     //   },
//     //   (error) => {
//     //     return Promise.reject(error);
//     //   }
//     // );
    

//     axios.interceptors.response.use((response)=>{
//       Object.assign(response,{testid:'1212'})
//       console.log(response)
//     },(error)=>{
//       return Promise.reject(error)
//     })

//   return (
//     <>
//     <h2>Axios Data</h2>
//     {myData.map((post)=>{
//         const {id,title,body}=post;
//         return <div key={id}>
//         <h2>{title}</h2>
//         <p>{body}</p>
//         </div>

//     })}
//     </>
//   )
// }
