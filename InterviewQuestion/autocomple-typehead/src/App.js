import "./App.css";
import Autocomplete from "./components/autocomplete";

function App() {

  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
      console.log("Response : ", response);
      const data = await response.json();
      return data?.recipes;
    } catch (error) {
      console.log("Error While Fetching Suggestions : ", error);
    }
  };

  return (
    <div className="type-head">
      <h1>Typehead/Autocomplete</h1>
      <Autocomplete
        placeholder="Search Products"
        fetchSuggestions={fetchSuggestions}
        dataKey="name"
        customLoding={<>...Loding Recipes</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyles = {{}}
      />
    </div>
  );
}

export default App;
