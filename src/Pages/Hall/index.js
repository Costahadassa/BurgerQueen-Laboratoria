import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useHistory } from "react-router-dom";

function Hall() {
    const token = localStorage.getItem('token');
    var myHeaders = new Headers();

    const history = useHistory();

    const [client, setClient] = useState("");
    const [menu, setMenu] = useState("");
    const [table, setTable] = useState("");
    const [order, setOrder] = useState([]);
    const [menuAlmoco, setMenuAlmoco] = useState("");
    const [pedido, setPedido] = useState({client:'', table:'', products:[]})



    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", token);

    // var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };
    console.log(token)
    // useEffect(() => {
    //     fetch("https://lab-api-bq.herokuapp.com/products", {
    //         headers: {

    //             'accept': 'application/json',
    //             'Authorization': `${token}`
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // }, [token])

    // const breakfast = () => { };
    // const burger = () => { };
    // const sendKitchen = () => { };
    function getCafe() {
        console.log('ok')
        fetch("https://lab-api-bq.herokuapp.com/products", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                const cafeDamanha = result.filter(item => item.type === 'breakfast')
                setMenu(cafeDamanha)

            })
            .catch(error => console.log('error', error))
    }
    function getAlmoco() {
        console.log('ok')
        fetch("https://lab-api-bq.herokuapp.com/products", {
            headers: {

                'accept': 'application/json',
                'Authorization': `${token}`
            },
        })
            .then(response => response.json())
            .then(result => {
                const almoco = result.filter(item => item.type === 'all-day')
                setMenuAlmoco(almoco)
            })
            .catch(error => console.log('error', error));
    }
    function addItem(e) {
        const parent = e.target.parentNode
        const price = parent.getAttribute('price')
        const name = parent.getAttribute('name')
        const id = parent.getAttribute('id')
        const flavor = parent.getAttribute('flavor')
        const complement = parent.getAttribute('complement')
        const itemPedido = {
            id: id,
            name: name,
            price: price,
            qtd: 1,
            flavor: flavor,
            complement: complement
        }
        console.log(order)
        if (!order.some(item => item.id === id)) {
            setOrder([...order, itemPedido])
        }
        else {
            order.map((item, index) => {
                if (item.id === id) {
                    order[index].qtd++
                    setOrder([...order])

                }
            })
        }
    }
    function handlePedido(){
        const products = order.map(item=>{
            return {'id':item.id,'qtd':item.qtd}
        })
        pedido.products=products
        console.log(pedido)
        fetch("https://lab-api-bq.herokuapp.com/orders", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body:JSON.stringify(pedido)
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <>
        <input type='text'placeholder='Nome do Cliente'onChange={(e)=>setPedido({...pedido,'client':e.target.value})}></input>
        <input type='text'placeholder='Mesa'onChange={(e)=>setPedido({...pedido,'table':e.target.value})}></input>
            <button onClick={getCafe}>Café da manhã</button>
            <div>
                {menu && menu.map((item) => (
                    <div price={item.price} name={item.name} id={item.id} onClick={addItem}>
                        <p>
                            {item.name}
                        </p>
                        <p>
                            {item.price}
                        </p>
                    </div>
                ))}
            </div>
            <button onClick={getAlmoco}>Almoço</button>
            <div>
                {menuAlmoco && menuAlmoco.map((item) => (
                    <div price={item.price} name={item.name} id={item.id} flavor={item.flavor} complement={item.complement} onClick={addItem}>
                        <p>
                            {item.name} {item.flavor} {item.complement}
                        </p>
                        <p>
                            {item.price}
                        </p>
                    </div>
                ))}
            </div>
            <div>
                <h1>Resumo Pedido</h1>
                {order && order.map((item) => (
                    <div id={item.id}>
                        <p>
                            {item.qtd}x {item.name} {item.flavor} {item.complement}
                        </p>
                        <p>
                            R${item.price}
                        </p>
                    </div>
                ))}
            </div>
            <button onClick={handlePedido}>Enviar Pedido</button>
        </>
    );
}

export default Hall;