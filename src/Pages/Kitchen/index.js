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
                const pedidosPendentes = result
                setPendentes(pedidosPendentes.filter((pedido) => pedido.status.includes('pending')))
                
            })
            .catch(error => console.log('error', error));
    }, [token])
    const statusPedido = (id, index) => {
        let pedidoId = id
        fetch(`https://lab-api-bq.herokuapp.com/orders/${pedidoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body: JSON.stringify({ 'status': 'done' })
        })
            .then(response => response.json())
            .then(result => {
                if (result.id === pendentes[index].id) {
                    pendentes.splice(index, 1)
                    setPendentes([...pendentes])                    
                }

            })
            .catch(error => console.log('error', error));
    }
    
    return (
        <div className="Cozinha">
            <h1 className="tituloCozinha">Pedidos Pendentes</h1>
            {pendentes.map((pedido, index) => (
                <>
                    <p key={index}>{pedido.client_name} {pedido.id}</p>

                    <div>{pedido.Products.map(item => (
                        <p>{item.name}</p>
                    ))}</div>
                    <button onClick={() => statusPedido(pedido.id, index)}>Finalizar Pedido</button>
                </>
            ))}
            
        </div>
    );
}

export default Kitchen;