import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

function Item({ itemDetail }) {
    return (
        <div className="item">
            <h3>{itemDetail.title}</h3>
            <img src={itemDetail.image} alt={itemDetail.title} />
            <p>{itemDetail.price}</p>
            <Link to={`/item/${itemDetail.id}`}>Ver detalles</Link>
            <ItemCount stock={5} initial={1} onAdd={(count) => console.log('Cantidad seleccionada para el cart: ', count)} />
        </div>
    )
}

export default Item
