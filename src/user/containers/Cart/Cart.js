import React from 'react';
import Heading from '../../component/UI/heading/Heading';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CartDcrement, CartIncrement, removeItem } from '../../../redux/action/Cart.action';

function Cart(props) {
    const dispatch = useDispatch();
    let cartData = useSelector(state => state.addtocart);
    let madicinesData = useSelector(state => state.madicines);

    let cartItem = cartData.cart.map((v) => {
        let madData = madicinesData.madicines.find((m) => m.id === v.pid);
        return { ...madData, ...v }
    });

    let total = cartItem.reduce((acc, v) => acc + (v.qty * v.price), 0);

    const handleCartDcr = (id) => {
        dispatch(CartDcrement(id));
    }

    const handleCartIncr = (id) => {
        dispatch(CartIncrement(id));
    }

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <Heading>Cart</Heading>
                    <div className="card rounded-3 mb-4">
                        {
                            cartItem.map((v) => {
                                return (
                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2">{v.name}</p>
                                                <p><span className="text-muted">Expiry: </span>{v.expiry}</p>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <Button className="btn btn-link px-2" disabled={v.qty > 1 ? false : true} onClick={() => handleCartDcr(v.pid)}>
                                                    <i className="fas fa-minus" />
                                                </Button>
                                                <span>{v.qty}</span>
                                                <Button className="btn btn-link px-2" onClick={() => handleCartIncr(v.pid)}>
                                                    <i className="fas fa-plus" />
                                                </Button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0">{v.price * v.qty}$</h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <a href="#!" className="text-danger" onClick={() => handleRemove(v.pid)}><i className="fas fa-trash fa-lg" /></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                        <h5>Total bill : {total}</h5>
                </div>
            </div>
        </section>
    );
}

export default Cart;