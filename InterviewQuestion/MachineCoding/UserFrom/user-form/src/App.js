import './App.css';
import { useState } from 'react';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    hobbies: [],
    country: '',
  });
  const handleFromData = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => {
        const hobbies = prev.hobbies.includes(value)
          ? prev.hobbies.filter((hobby) => hobby !== value)
          : [...prev.hobbies, value];
        return { ...prev, hobbies };
      });
    }
    else{
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="App">
     <p>User Details :</p>
     <labeL htmlFor = "name">Name: </labeL>
     <input type="text" id = "name" name="name" value={formData.name} onChange={handleFromData} placeholder="Enter your name" />
      <labeL htmlFor = "email">Email: </labeL>
      <input type="email" id = "email" name="email" value={formData.email} onChange={handleFromData} placeholder="Enter your email" />
      <div>
        <p>Gender: </p>
        <input type="radio" name = "gender" checked= {formData.gender === "Male"} value = "Male" onChange={handleFromData} />
        <input type="radio" name = "gender" checked= {formData.gender === "Female"} value = "Female" onChange={handleFromData} />
      </div>
      <div>
        <p>Hobbies:</p>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="Reading"
            checked={formData.hobbies.includes('Reading')}
            onChange={handleFromData}
          />
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="Traveling"
            checked={formData.hobbies.includes('Traveling')}
            onChange={handleFromData}
          />
          Traveling
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="Gaming"
            checked={formData.hobbies.includes('Gaming')}
            onChange={handleFromData}
          />
          Gaming
        </label>
      </div>
      <div>
        <p>Country :</p>
        <select name="country" value={formData.country} onChange={handleFromData}> 
          <option value="">Select your country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
