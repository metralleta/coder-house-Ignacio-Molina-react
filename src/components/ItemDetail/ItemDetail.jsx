function ItemDetail({ itemDetail }) {
    return (
        <div>
            <h2>{itemDetail.title}</h2>
            <img src={itemDetail.image} alt={itemDetail.title} />
            <p>{itemDetail.price}</p>
            <p>{itemDetail.description}</p>
        </div>
    )
}

export default ItemDetail