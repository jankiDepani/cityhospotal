import React from 'react';
import Layout from '../admin/components/Layout';
import { Route, Routes } from 'react-router-dom';
import AdminHome from '../admin/containers/AdminHome';
import MadicineData from '../admin/containers/Madincines/MadicineData';
import DepartmentData from '../admin/containers/DepartmentData';
import AppoinmentData from '../admin/containers/AppoinmentData';
import Doctor from '../admin/containers/Doctor/Doctor';

function Adminroute(props) {
    return (
    <Layout>
        <Routes>
            <Route path='/' element={ <AdminHome />} />
            <Route path='/Doctor' element={ <Doctor />} />
            <Route path='/madicineData' element={ <MadicineData />} />
            <Route path='/departmentData' element={ <DepartmentData />} />
            <Route path='/appoinmentData' element={ <AppoinmentData />} />
        </Routes>
    </Layout>
    );
}

export default Adminroute;