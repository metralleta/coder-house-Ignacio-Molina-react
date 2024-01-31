import cartIcon from '../../assets/icons/cart_x96.png'

function CartWidget() {
    return (
        <div className="widget">
            <img src={cartIcon} alt="Cart Icon" width={45} height={45} />
            <span>3</span> {/* Hardcodeado a 3 para este ejemplo */}
        </div>
    )
}

export default CartWidget
