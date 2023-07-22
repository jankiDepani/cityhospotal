import * as React from 'react';


import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MedicineForm from './MedicineForm';


export default function MadicineData() {
    const [data, setData] = React.useState([]);
    const [update, setUpdate] = React.useState(null);

    React.useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('medicines'));

        if (localData !== null) {
            setData(localData)
        }
    }, []);

    const handleSubmitData = (data) => {
        let localData = JSON.parse(localStorage.getItem('medicines'));

        let r = Math.floor(Math.random() * 1000);

        let newData = { id: r, ...data }
        console.log(localData);

        if (localData === null) {
            localStorage.setItem("medicines", JSON.stringify([newData]));
            setData([newData])
        } else {
            if (update) {
                let uData = localData.map((v) => {
                    if (v.id === data.id) {
                        return data;
                    } else {
                        return v;
                    }
                });
                localStorage.setItem("medicines", JSON.stringify(uData));
                setData(uData);
                setUpdate(null);
            } else {
                localData.push(newData);
                localStorage.setItem("medicines", JSON.stringify(localData));
                setData(localData)
            }
        }
        
    }

    
    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem('medicines'));

        let fData = localData.filter((v) => v.id !== id);
        localStorage.setItem("medicines", JSON.stringify(fData));
        setData(fData)
    }

    const handleUpdate = (data) => {
        
        setUpdate(data);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'First name', width: 130 },
        { field: 'price', headerName: 'Last name', width: 130 },
        { field: 'expiry', headerName: 'First name', width: 130 },
        { field: 'desc', headerName: 'Last name', width: 130 },
        {
            field: 'action',
            headerName: 'Actions',
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleUpdate(params.row)}>
                        <EditIcon />
                    </IconButton>
                </>
            )
        }
    ];


    return (
        <div className='mainBox'>
            <br /><br />
            {/* Lifting state up */}
            <MedicineForm onHandleSubmit={handleSubmitData} updateData={update} />

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
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