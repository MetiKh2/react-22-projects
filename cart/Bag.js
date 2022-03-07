import React, {useEffect} from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {connect} from "react-redux";
import {increaseItemToCart, decreaseItemFromCart, removeItemFromCart, clearCart} from "./Redux/Cart/CartAction";
import {fetchCart} from "./api/CartApi";
const Bag = ({increaseItemToCart,cart,removeItemFromCart,isLoading,decreaseItemFromCart,clearCart}) => {
    const sumOfCart=cart.map(p=>p.amount*p.price)
    return (
        <main className={'mt-5'}>
               <section className={'my-container'}>
                   <div className={'text-center mb-5'}>
                       <h1 className={'fw-bold bag-title'}>Your Bag</h1>
                   </div>
                   <section>
                       {cart.map(item=>{
                           return  <div key={item.id} className={'cart-list-item'}>
                               <img className={'cart-item-img'} src={item.img}/>
                               <div>
                                   <p className={'mb-1 fw-bold'}>{item.title}</p>
                                   <p className={'mb-1'}>${item.price}</p>
                                   <button onClick={()=>removeItemFromCart(item.id)}>remove</button>
                               </div>
                               <div className={'d-flex flex-column align-items-center'}>
                                   <KeyboardArrowUpIcon onClick={()=>increaseItemToCart(item.id)} className={'text-primary'}/>
                                   <p className={'m-0'}>{item.amount}</p>
                                   <KeyboardArrowDownIcon onClick={()=>decreaseItemFromCart(item.id)} className={'text-primary'}/>
                               </div>
                           </div>
                       })}
                   </section>
                   <hr/>
                   <div className={'d-flex justify-content-between mt-3'}>
                       <p className={'fw-bold'}>Total</p>
                       <p className={'fw-bold'}>${sumOfCart.reduce((a, b) => a + b, 0)}</p>
                   </div>
                   <div className={'text-center mt-4'}>
                       <button onClick={clearCart} className={'btn btn-outline-danger fw-bold '}>
                           Clear Cart
                       </button>
                   </div>
               </section>
        </main>
    );
};

function mapStateToProps(state) {
    return {
        cart:state.cart,
        isLoading:state.isLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        increaseItemToCart:(id)=>dispatch(increaseItemToCart(id)),
        decreaseItemFromCart:(id)=>dispatch(decreaseItemFromCart(id)),
        removeItemFromCart:(id)=>dispatch(removeItemFromCart(id)),
        clearCart:()=>dispatch(clearCart()),
        fetchCart:()=>dispatch(fetchCart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bag)