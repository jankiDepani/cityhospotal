import React from 'react';
import Layout from '../admin/components/Layout';
import AdminHome from '../admin/containers/AdminHome';
import DoctorsData from '../admin/containers/DoctorsData';
import MadicineData from '../admin/containers/Medicines/MadicineData';
import DepartmentData from '../admin/containers/DepartmentData';
import AppoinmentData from '../admin/containers/AppoinmentData';
import { Route, Routes } from 'react-router-dom';
import Doctors from '../admin/containers/Doctors/Doctors';

function AdminRoute(props) {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<AdminHome />} />
                <Route path='/DoctorsData' element={<Doctors />} />
                <Route path='/MadicineData' element={ <MadicineData />} />
                <Route path='/DepartmentData' element={ <DepartmentData />} />
                <Route path='/AppoinmentData' element={ <AppoinmentData />} />
            </Routes>
        </Layout>
    );
}

export default AdminRoute;