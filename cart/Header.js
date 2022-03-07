import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Badge, ButtonBase} from "@mui/material";
import {clearCart, decreaseItemFromCart, increaseItemToCart, removeItemFromCart} from "./Redux/Cart/CartAction";
import {fetchCart} from "./api/CartApi";
import {connect} from "react-redux";
const Header = ({cartLength}) => {
    return (
        <header className={'bg-info'}>
            <section className={'container py-3'}>
                <div className={'d-flex justify-content-between'}>
                    <h3 className={'text-white'}>UseReducer</h3>
                    <ButtonBase>
                        <Badge badgeContent={cartLength} color="primary">
                        <ShoppingBasketIcon className={'text-white fs-2'}/>
                        </Badge>
                    </ButtonBase>
                </div>
            </section>
        </header>
    );
};

function mapStateToProps(state) {
    return {
        cartLength:state.cart.length,
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)