import React, { useState } from 'react';

const MyState = () => {
  const [myName, setMyName] = useState('');
  const [myPoint, setMyPoint] = useState(50);

  const onMyNameChange = e => {
    setMyName(e.currentTarget.value);
  };
  
  return (
    <div>
      <h2>MyState</h2>
      <h3>{myName}님의 점수는 {myPoint}점 입니다.</h3>
      <hr />

      <div>
        <label htmlFor='myNameInput'>이름: </label>
        <input id='myNameInput' type='text' value={myName} onChange={onMyNameChange} />
      </div>

      <div>
        <label htmlFor='myPointInput'>점수: </label>
        <input
          id='myPointInput'
          type='range'
          min='0'
          max='100'
          value={myPoint}
          step='1'
          onChange={e => setMyPoint(e.currentTarget.value)}
        />
      </div>
    </div>
  )
}

export default MyState
