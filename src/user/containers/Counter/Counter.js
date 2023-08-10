import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { dcrement, increment } from '../../../redux/slice/CounterSlice';
// import { decrement, increment } from '../../../redux/action/Counter.action';

function Counter(props) {
    const dispatch = useDispatch();
    const counterVal = useSelector(state => state.counter)

    const handleInc = () => {
        dispatch(increment());
    }
    const handleDec = () => {
        dispatch(dcrement());
    }

    return (
        <div>
            <Button onClick={() => handleInc()}>+</Button>
            <span>{counterVal.count}</span>
            <Button onClick={() => handleDec()}>-</Button>
        </div>
    );
}

export default Counter;