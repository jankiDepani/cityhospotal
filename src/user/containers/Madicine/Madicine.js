import React, { useEffect, useState } from 'react';
import ListMdicine from './ListMdicine';
import { Input } from 'reactstrap';
import Heading from '../../component/UI/heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { getMadicineData } from '../../../redux/action/Madicine.action';

function Madicine(props) {

    const dispacth = useDispatch();
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const Madicine = useSelector(state => state.madicines);
    useEffect(() => {
        dispacth(getMadicineData());
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

    const handleAddtocart = (id) =>  {
        console.log("add to cart" + id);
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
                    <ListMdicine mData={Madicine.madicines} onaddtocart={handleAddtocart} />
                </div>
            </div>
        </section>
    );
}

export default Madicine;