import { useContext } from "react"
import { CartContext } from "../Context/CartStore"
import style from "../Styles/Cart.module.scss"
export default function Cart() {
    let { itemsInCart } = useContext(CartContext)
    return <>
        {itemsInCart.length == 0 ? <div className="vh-100 py-5">
            <div className="container h-100">
                <h3>Cart</h3>
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <p>Your cart is empty!</p>
                </div>
            </div>

        </div> : <div className={`${style.cart} py-3`}>
            <div className="container ">
            <h3 className="py-3">Cart</h3>

                <div className="row ">
                    <div className={`col-sm-12 col-md-6 col-lg-6 ${style.right}`}>
                    
                    </div>
                    <div className={`col-sm-12 col-md-6 col-lg-6 ${style.total}`}>
                        <div className="rounded-2  border p-5">
                            <h3>Order Summary</h3>
                            <hr />
                            <p>Price (14 items)</p>
                            <p>Discount (10%)</p>
                            <p>Delivery charges (5%)</p>
                            <p>You'll save 20$ on this order</p>
                            <hr />
                            <h3>Total Amout</h3>
                            <h3>2200$</h3>
                            <hr />
                            <button className={`w-100 p-3 text-white btn ${style.btnStyle} `}>PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>}

    </>
}