import React from 'react';
import CoustomCard from '../../component/UI/CoustomCard';

function ListMdicine({ mData }) {
    return (
        <>
            {
                mData.map((v, i) => {
                    return (
                        <>
                            <CoustomCard value={v} />
                        </>
                    )
                })
            }
        </>
    );
}

export default ListMdicine;