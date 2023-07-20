import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MadicineForm from './MadicineForm';


export default function MadicineData() {
    const [data, setData] = React.useState([]);
    const [update, setUpdate] = React.useState(null);

    React.useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("madicine"));

        if (localData !== null) {
            setData(localData)
        }

    }, [])

    

    const handleSubmitData = (data) => {
        let localData = JSON.parse(localStorage.getItem("madicine"));

        let r = Math.floor(Math.random() * 1000);

        let newData = { id: r, ...data }

        if (localData === null) {
            localStorage.setItem("madicine", JSON.stringify([newData]));
            setData([newData]);
        } else {
            if (update) {
                let uData = localData.map((v) => {
                    if (v.id === data.id) {
                        return data;
                    } else {
                        return v;
                    }
                });
                localStorage.setItem("madicine", JSON.stringify(uData));
                setData(uData);
                setUpdate(null);
            } else {
                localData.push(newData);
                localStorage.setItem("madicine", JSON.stringify(localData));
                setData(localData);
            }
        }
    }

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("madicine"));

        let fData = localData.filter((v) => v.id !== id);

        localStorage.setItem("madicine", JSON.stringify(fData));
        setData(fData)
    }

    const handleupdate = (data) => {
        setUpdate(data);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Madicine Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'exipDate', headerName: 'Expiry Date', width: 130 },
        { field: 'desc', headerName: 'Madicine Description', width: 130 },
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
            <br /><br />
            <MadicineForm onHandleSumbitData={handleSubmitData} updateData={update}/>
            <br /><br />
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