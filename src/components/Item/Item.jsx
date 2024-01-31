import ItemCount from '../ItemCount/ItemCount'

function Item({ itemDetail }) {
    return (
        <div>
            // Mostramos el detalle de cada item
            <div key={itemDetail.id}>
                <h2>{itemDetail.title}</h2>
                <p>{itemDetail.price}</p>
                <img src={itemDetail.image} alt={itemDetail.title} />
            </div>
            <ItemCount stock={5} initial={1} onAdd={(count) => console.log('Cantidad seleccionada para el cart: ', count)} />
        </div>
    )
}

export default Item
