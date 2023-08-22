import React, { useEffect } from 'react';
import DoctorsData from './DoctorsForm';
import { useDispatch, useSelector } from 'react-redux';
import { AddDoctos, deleteDoctor, updateDoctos } from '../../../redux/action/Docter.action';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getdoctor } from '../../../redux/slice/doctorsSlice';

function Doctor(props) {
    const dispacth = useDispatch();
    const doctors = useSelector(state => state.doctors);
    const [update, setUpdate] = React.useState(null);

    const handleDoctorData = (data) => {
        console.log(data);
        if (update) {
            dispacth(updateDoctos(data))
        }else {
            dispacth(AddDoctos(data))
        }
        setUpdate(null);
    }

    const handleDelete = (id) => {
        dispacth(deleteDoctor(id))
    }

    const handleupdate = (data) => {
        setUpdate(data)
    }

    useEffect(() => {
        dispacth(getdoctor());
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'doctorName', headerName: 'doctor Name', width: 130 },
        { field: 'doctorDegignation', headerName: 'degree', width: 130 },
        { field: 'doctorDescripstion', headerName: 'detailes', width: 130 },
        { field: 'doctorImg', headerName: 'doctors photo', width: 130 },
        {
            field: 'action',
            headerName: 'Actions',
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleupdate(params.row)}>
                        <EditIcon />
                    </IconButton>
                </>
            )
        }
    ];

    return (
        <div className='mainBox'>
            <DoctorsData onhandleSubmit={handleDoctorData} updateData={update}/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={doctors.doctors}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Doctor;