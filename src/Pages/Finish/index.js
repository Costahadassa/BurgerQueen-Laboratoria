// import React, { useEffect, useState } from 'react';
// import '../../App.css';


// function Finish() {
//     const token = localStorage.getItem("token")
//     const id = localStorage.getItem("id")
//     console.log(token, id)
//     const [finish, setFinish] = useState([])

//     useEffect(() => {
//         fetch("https://lab-api-bq.herokuapp.com/orders", {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `${token}`
//             },
//         })
//             .then(response => response.json())
//             .then(result => {
//                 const pedidosFinalizados = result
//                 setPendentes(pedidosFinalizados.filter((pedido) => pedido.status.includes('finish')))


//             })
//             .catch(error => console.log('error', error));
//     }, [token])

//     {
//         prontos.map((pedido, index) => (
//             <>
//                 <p key={index}>{pedido.client_name} {pedido.id}</p>

//                 <div>{pedido.Products.map(item => (
//                     <p>{item.name}</p>
//                 ))}</div>
//                 <button onClick={() => statusFinalizados(pedido.id, index)}>Pedido Finalizado</button>
//             </>
//         ))
//     }

//     export default Finish;