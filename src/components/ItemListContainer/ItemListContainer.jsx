import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        // Simulamos un fetch a una API
        const fetchItems = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setItems(data)
            } catch (error) {
                console.log('Error en el fetch a la aAPI: ', error)
            }
        }

        // Ejecutamos la función con el llamado a la API
        fetchItems()
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            // Pasamos la prop items al componente ItemList para que liste los items
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer
