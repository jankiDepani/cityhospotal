import React from 'react';
import CoustomCard from '../../component/UI/CoustomCard';

function ListMdicine({ mData, onaddtocart }) {
    return (
        <>
            {
                mData.map((v, i) => {
                    return (
                        <>
                            <CoustomCard value={v} btnData ={ 'add to cart'} onclick={onaddtocart} />
                        </>
                    )
                })
            }
        </>
    );
}

export default ListMdicine;