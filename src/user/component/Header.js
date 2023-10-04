import React from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logOutuser } from '../../redux/action/auth.action';

function Header(props) {
    let cartData = useSelector(state => state.addtocart);

    let Totalitem = cartData.cart.reduce((acc, v) => acc + v.qty, 0);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const auth = useSelector(state => state.auth);
    const dispacth = useDispatch();

    const haldleLogout = () => {
        console.log('logout');
        dispacth(logOutuser())
    }
    // console.log(auth);

    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <Link to="/cart">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={Totalitem} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        <a href="/" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="/" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="/" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="/" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                            <li><Link className="nav-link scrollto" to="/Departments">Departments</Link></li>
                            <li><Link className="nav-link scrollto" to="/Doctors">Doctors</Link></li>
                            <li><Link className="nav-link scrollto" to="/Madicine">Madicine</Link></li>
                            <li><Link className="nav-link scrollto " to="/About">About</Link></li>
                            <li><Link className="nav-link scrollto" to="/Countact">Contact</Link></li>
                            <li><Link className="nav-link scrollto" to="/counter">Counter</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <Link to="/Appoinment"><Button>Make an Appointment</Button>
                    </Link>
                    {
                        auth.user ?
                            <Link to="/Auth">
                                {/* <Button onClick={() => console.log("logout")}>Logout</Button> */}
                                <button onClick={() => haldleLogout()}>logout</button>
                            </Link> :
                            <Link to="/Auth">
                                <Button>Login/ Signup</Button>
                            </Link>
                    }
                </div>
            </header>
        </div>

    );
}

export default Header;