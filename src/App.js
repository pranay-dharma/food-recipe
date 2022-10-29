import React, {useState}  from 'react';
import Products from './Products';
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID ="2cc5592f";
const YOUR_APP_KEY ="b75b58e4e1a4ddf3de5149fa78391c38";
  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }
  const onSubmitHandler =(e) => {
    e.preventDefault();
   fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`)
   .then(response => response.json()).then(
    data => setData(data.hits)
    
   )
  }
  return (
  <>
    <div className='container'>
      {/* title for page */}
      <h4 className='title'>Food Recipe App</h4>
    </div>
  
      <form onSubmit = {onSubmitHandler}>
        {/* input field for searching recipe */}
        <input type = "text" id='text' value = {search} onChange={onChangeHandler} /><br/>
        {/* button for getting data */}
        <input type = "submit" id='search' value = "Search" />
      </form>
      {/* it will give you data if match with recipe name in API  */}
      { data.length >= 1 ?   <Products data={data} /> : null }
    
    
   
    </>
   
  );
}

export default App;
