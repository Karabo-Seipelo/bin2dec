// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import bin2dec from '../../services/bin2dec';
import './app.scss';

const App = () => {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');
    const [error, setError] = useState(null);

    const onChangeHander = (e) => {
        const value = e.target.value;
        const patt = /^[0-1]{1,}$/g;

        if (patt.test(value)) {
            setBinary(bin2dec(value));
            setError(null);
        } else if (value.length > 0) {
            setError('Please enter binary values 0 or 1');
        }
    };

    const onClickHandler = () => {
        setDecimal(binary);
    };

    return (
        <div className="full-screen">
            <div>
                {error && <div className="error">{error}</div>}
                <h1>Binary to Decimal </h1>
                <div>
                    <input type="string" maxLength="8" onChange={onChangeHander} placeholder="Enter you binary value" />
                    <button className="button-line" onClick={onClickHandler} disabled={error ? true : false}>
                        Convert Binary to Decimal
                    </button>
                </div>
                <div>
                    <input name="decimal" type="string" value={decimal} placeholder="Decimal equivalent" disabled />
                </div>
            </div>
        </div>
    );
};

export default App;
