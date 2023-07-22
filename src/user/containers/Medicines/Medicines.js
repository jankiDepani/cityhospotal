import React, { useEffect, useState } from 'react';
import ListMedicines from './ListMedicines';

function Medicines(props) {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        if (localData) {
            setData(localData);
        }

    }, []);

    const handleSearch = (val) => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        let fData = localData.filter((v) => 
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.expiry.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase())
        );

        setFilterData(fData);
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Medicines</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
            </div>
            <div className="container">
                <input 
                    type='search'
                    name='search'
                    id='search'
                    placeholder='Search...'
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <div className='row justify-content-between'>
                    <ListMedicines mdata={filterData.length > 0 ? filterData :  data} />
                </div>
            </div>
        </section>
    );
}

export default Medicines;