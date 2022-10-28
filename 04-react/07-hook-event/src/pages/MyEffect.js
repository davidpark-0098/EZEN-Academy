import React, { useState, useEffect } from 'react';


import code from '../assets/img/App.png';

const MyEffect = () => {
  const [myBrightness, setBrightness] = useState(100);

  const [myWidth, setMyWidth] = useState(window.innerWidth);

  const onMyResize = () => {
    console.log(`창 사이즈 변경됨 >> ${window.innerWidth}`);
    setMyWidth(window.innerWidth);
  }

  useEffect(() => {
    console.clear();
    console.log('[MyEffect1] %s ::: 화면에 컴포넌트가 처음 로드될 때 처리되어야 할 기능', new Date());
    window.addEventListener('resize', onMyResize);
    return () => {
      console.log("화면에서 벗어남");
      window.removeEventListener('resize', onMyResize)
    };
  }, []);

  useEffect(() => {
    console.log('[MyEffect2] %s ::: 화면에 컴포넌트가 처음 로드되거나 state, props 중 하나라도 변경될 경우 호출됨', new Date());
  });

  useEffect(() => {
    console.log('[MyEffect4] %s ::: myBrightness값이 변경됨', new Date());
  }, [myBrightness]);

  useEffect(() => {
    return () => {
      console.log('[MyEffect3] %s ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능', new Date());
    };
  });
  
  return (
    <div>
      <h2>MyEffect</h2>
      <h3>Window Width: {myWidth}</h3>

      <div>
        <input
          type='range'
          min='0'
          max='200'
          step='1'
          value={myBrightness}
          onChange={e => {
            setBrightness(e.currentTarget.value);
          }}
          />
      </div>

      <img
        alt='Hello React'
        src={code}
        width='480'
        style={{
          filter: 'brightness(' + myBrightness + '%)',
        }}
        />
    </div>
  )
}

export default MyEffect
