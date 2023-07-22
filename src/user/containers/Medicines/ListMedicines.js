import React from 'react';
import CustomCard from '../../component/UI/CustomCard';

function ListMedicines({ mdata }) {
    console.log(mdata);
    return (
        <>
            {
                mdata.map((v, i) => {
                    return (
                        <div className='col-md-3'>
                            <CustomCard values={v} />
                        </div>
                    )
                })
            }
        </>
    );
}

export default ListMedicines;