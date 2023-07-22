import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctor, getDoctors } from '../../../redux/action/docotrs.action';
import DoctorsForm from './DoctorsForm';
import { DataGrid } from '@mui/x-data-grid';

function Doctors(props) {
    const dispatch = useDispatch();
    const docotrs = useSelector(state => state.doctors);

    useEffect(() => {
        dispatch(getDoctors());
    }, []);

    const handleSubmitData = (data) => {
        console.log(data);
        dispatch(addDoctor(data))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'degree', headerName: 'Degree', width: 130 },
        // {
        //     field: 'action',
        //     headerName: 'Actions',
        //     renderCell: (params) => (
        //         <>
        //             <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
        //                 <DeleteIcon />
        //             </IconButton>
        //             <IconButton aria-label="delete" onClick={() => handleUpdate(params.row)}>
        //                 <EditIcon />
        //             </IconButton>
        //         </>
        //     )
        // }
    ];

    return (
        <>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h1>Doctor</h1>
            <DoctorsForm onHandleSubmit={handleSubmitData}/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={docotrs.doctors}
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
        </>
    );
}

export default Doctors;