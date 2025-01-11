import React, { useEffect } from 'react'

const ProgressBar = ({value, onComplete}) => {
    const [percent, setPercent] = React.useState(value);
    useEffect(() => {
        setPercent(Math.min(100, Math.max(0, value)));
        if(value === 100){
            onComplete();
        }
    },[value, onComplete]);
  return (
    <div className='progres'>
      <span style = {{color: `${percent > 49 ? "white" : "black"}`}}>{percent.toFixed()}%</span>
      <div style = {{width: `${percent}%`}}/>
    </div>
  )
}

export default ProgressBar
