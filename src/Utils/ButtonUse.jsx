import React from 'react';

const ButtonUse = ({Dbtn, Text}) => {
  return (
    <div>
        <button className={Dbtn}>{Text}</button>
    </div>
  )
}

export default ButtonUse
