import React, { useState } from 'react';
import { useCallback } from 'react';

const MyCallback = () => {
  const [myText, setMyText] = useState('Hello React');

  const onInputChange = useCallback(e => {
    setMyText(e.currentTarget.value);
    console.log('hi');
  }, []);

  return (
    <div>
    <h2>MyCallback</h2>    
    <h3>{myText}</h3>
    <input type='text' placeholde='input...' onChange={onInputChange} />
    </div>
  )
}

export default MyCallback