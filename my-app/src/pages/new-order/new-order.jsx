import React from 'react'
import Header from '../../components/header/header'
import './new-order.css'

const NewOrder = () => {
    const [menus, setMenu] = React.useState([])

    React.useEffect(() => {
        //console.log('useEffect')
        getMenu()
    },[])
    const getMenu = async () => {
        const data = await fetch('https://api.sheety.co/7d28747999f75b5a4eef909ac5bef343/menu/products?filter[type]=desayuno')
        const products = await data.json()
        console.log(products)
        setMenu(products)
    }

    return (
        <div>
            <Header />
            <div className='grid'>
                <div id='clientName'>
                    <label>Nombre: </label>
                    <input type="text" id='name'/>
                </div>
                <button className='yellow-button'>MENU DESAYUNO</button>
                <button className='yellow-button'>MENU GENERAL</button>
                <div className='date'>
                    <p>Fecha: 
                        <span> xx/xx/xx</span>
                    </p>
                </div>
                <div className='hour'>
                    <p>Hora: 
                        <span> xx:xx</span>
                    </p>
                </div>

                <div className='menu'>
                    <p className='title-table yellow'>MENU DESAYUNO</p>
                    <div className='table-container'>
                    <ul className='products-list whiteBackgroud'>
                        {
                           menus.products.map((item) => (
                            <li key={item.id} className='product-container'>
                                <span className='text-black'>{item.name}</span>
                                <span className='text-black'>{item.price}</span>
                                <button className='green'>+</button>
                            </li>
                           )) 
                        }
                        
                    </ul>
                    </div>        
                </div>

                <div className='final-order'>
                    <p className='title-table green'>MENU DESAYUNO</p>
                </div>

            </div>
        </div>
    )
}

export default NewOrder