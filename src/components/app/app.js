// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import bin2dec from '../../services/bin2dec';

const App = () => {
    const [binary, setBinary] = useState();
    const [error, setError] = useState(null);
    const [output, setOutput] = useState();

    const onChangeHander = (e) => {
        const value = e.target.value;
        const patt = /[1|0]{0,8}/g;

        if (patt.test(value)) {
            setBinary(bin2dec(value));
            setError(null);
        } else {
            setError('Please enter binary values');
        }
    };

    const onClickHandler = (e) => {
        setOutput(binary);
    };

    return (
        <div className="full-screen">
            <div>
                <h1>Bnary to Decimal </h1>
                <input type="string" maxLength="8" onChange={onChangeHander} />
                <button onClick={onClickHandler} disabled={error ? true : false}>
                    Convert Binary to Decimal
                </button>
            </div>
        </div>
    );
};

export default App;
