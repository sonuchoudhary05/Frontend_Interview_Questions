import React,{useState} from 'react';

const Accordian = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
      // Toggle the clicked item
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <div style={{ width: "400px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      {items.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ddd", marginBottom: "5px" }}>
          {/* Header */}
          <div
            onClick={() => handleClick(index)}
            style={{
              padding: "10px",
              cursor: "pointer",
              backgroundColor: activeIndex === index ? "#f7f7f7" : "#e7e7e7",
              borderBottom: "1px solid #ddd",
            }}
          >
            {item.title}
          </div>

          {/* Content */}
          {activeIndex === index && (
            <div style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordian
