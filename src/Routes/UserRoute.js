import React from 'react';
import Doctors from "../user/containers/Doctors";
import Footer from "../user/component/Footer";
import Header from "../user/component/Header";
import Home from "../user/containers/Home";
import About from "../user/containers/About"
import Departments from "../user/containers/Departments";
import Contect from "../user/containers/Contect";
import Contect1 from "../user/containers/Contect1";
import Appoinment from "../user/containers/Appointment";
import Doctor from "../user/containers/Doctor";
import { Route, Routes } from "react-router-dom";
import VisitingDoctor from "../user/containers/VisitingDoctor";
import NotFound from "../user/component/NotFound";
import Auth from "../user/containers/Auth";
import Madicine from '../user/containers/Madicine/Madicine';
import Counter from '../user/containers/Counter/Counter';
import Cart from '../user/containers/Cart/Cart';
import PrivateRoute from '../user/containers/PrivateRoute';

function UserRoute(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Departments" element={<Departments />} />
                <Route path="/Doctors" element={<Doctors />} />
                <Route path="/Countact" element={<Contect1 />} />
                <Route path="/Appoinment" element={<Appoinment />} />
                <Route path="/Auth" element={<Auth />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/Doctor/:id" element={<Doctor />} />
                <Route path="/Doctor/Visiting_Doctor" element={<VisitingDoctor />} /> */}

                <Route path="/Doctor/">
                    <Route path=":id" element={<Doctor />} />
                    <Route path="Visiting_Doctor" element={<VisitingDoctor />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path='Madicine' element={<Madicine />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoute;