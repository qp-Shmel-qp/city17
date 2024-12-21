import React, { useState } from 'react';
import Display from './Display';
import Buttons from './Buttons';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            resetCalculator();
        } else {
            setInput(input + value);
        }
    };

    const calculateResult = () => {
        try {
            setResult(eval(input));
        } catch (error) {
            setResult('Ошибка');
        }
    };

    const resetCalculator = () => {
        setInput('');
        setResult('');
    };

    return (
        <div className="calculator">
            <Display input={input} result={result} />
            <Buttons onButtonClick={handleButtonClick} />
        </div>
    );
};

export default Calculator;
