import Item from '../Item/Item'

function ItemList({ items }) {
    return (
        <div>
            // Recorremos el array de items y por cada uno de ellos llamamos al componente Item con el detalle de cada item
            {items.map((item) => {
                return <Item key={item.id} itemDetail={item} />
            })}
        </div>
    )
}

export default ItemList
