import React from 'react'

const ProgressBar = (props) => {
    const { progress } = props
  return (
    <div className='progress-bar'>
      <span style = {{
        color: progress > 50 ? "while" : "black",
        fontSize: "20px",
        textAlign: "center",
        zIndex: 1,
        position: "absolute",
        marginTop: "10px",
      }}>{progress}</span>
      <div className="progress" style = {{
        width: `${progress}%`,
      }}></div>
    </div>
  )
}

export default ProgressBar
