import React from 'react';
import CoustomCard from '../../component/UI/CoustomCard';

function ListMdicine({ mData }) {
    return (
        <>
            {
                mData.map((v, i) => {
                    return (
                        <div className='col-md-3 cardBox'>
                            <CoustomCard value={v} />
                        </div>
                    )
                })
            }
        </>
    );
}

export default ListMdicine;