import React, { useEffect, useState } from 'react';
import ListMdicine from './ListMdicine';
import { Input } from 'reactstrap';
import Heading from '../../component/UI/heading/Heading';

function Madicine(props) {

    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("madicine"));

        if (localData) {
            setData(localData);
        }

    }, [])

    const handleSearch = (val) => {
        let localData = JSON.parse(localStorage.getItem("madicine"));

        let fData = localData.filter((v) =>
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.exipDate.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase())
        );


        setFilterData(fData);
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <Heading>Madicine</Heading>
                    <p>
                        Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                        aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
                        sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet
                        aliquet rhoncus quis, luctus at neque. Mauris sit amet massa sed
                        orci vehicula facilisis.
                    </p>
                </div>
            </div>
            <div className="container">
                    <Input
                        name='search'
                        type='search'
                        id='search'
                        placeholder='search....'
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <br />
                <div className='row'>
                    <ListMdicine mData={filterData.length > 0 ? filterData : data} />
                </div>
            </div>
        </section>
    );
}

export default Madicine;