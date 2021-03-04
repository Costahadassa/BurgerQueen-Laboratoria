import React, { useEffect, useState } from 'react';
import '../../App.css';

function Kitchen() {
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    console.log(token, id)
    const [pendentes, setPendentes] = useState([])

    useEffect(() => {
        fetch("https://lab-api-bq.herokuapp.com/orders", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
        })
            .then(response => response.json())
            .then(result => {
                const pedidosPendentes=result
                setPendentes(pedidosPendentes.filter((pedido)=> pedido.status.includes('pending')))               

            })
            .catch(error => console.log('error', error));
    },[token])
    console.log(pendentes)    
    return (
        <div className="Cozinha">
            <h1 className="tituloCozinha">cozinha</h1>
            {pendentes.map(pedido=>(
                <>
                <p>{pedido.client_name}</p>
                <div>{pedido.Products.map(item=>(
                    <p>{item.name}</p>
                ))}</div>
                </>
            ))}
        </div>
    );
}

export default Kitchen;