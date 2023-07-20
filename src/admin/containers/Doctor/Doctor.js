import React, { useEffect } from 'react';
import DoctorsData from './DoctorsForm';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctor } from '../../../redux/action/Docter.action';
import { DataGrid } from '@mui/x-data-grid';

function Doctor(props) {
    const dispacth = useDispatch();
    const doctors = useSelector(state => state.doctors)

    const handleDoctorData = (data) => {
        console.log(data);
    }

    useEffect(() => {
        dispacth(getDoctor());
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'doctor Name', width: 130 },
        { field: 'degree', headerName: 'degree', width: 130 },
        // {
        //     field: 'action',
        //     headerName: 'Actions',
        //     renderCell: (params) => (
        //         <>
        //             <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
        //                 <DeleteIcon />
        //             </IconButton>
        //             <IconButton aria-label="delete" onClick={() => handleupdate(params.row)}>
        //                 <EditIcon />
        //             </IconButton>
        //         </>
        //     )
        // }
    ];

    return (
        <div className='mainBox'>
            <DoctorsData onhandleSubmit={handleDoctorData} />
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