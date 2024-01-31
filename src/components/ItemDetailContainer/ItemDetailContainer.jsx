import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const { itemId } = useParams()

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${itemId}`)
                const data = await response.json()
                setItem(data)
            } catch (error) {
                console.log('Error al obtener los detalles del producto: ', error)
            }
        }

        fetchItem()
    }, [itemId])

    return <ItemDetail itemDetail={item} />
}

export default ItemDetailContainer
