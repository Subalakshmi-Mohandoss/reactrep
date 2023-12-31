// import Button from './Components/Button';
// //import HelloWorld from './Day2/HelloWorld';
// //import ToggleMessage from './Day2/ToggleMessage';
//  function App() {
//    return(
// //    // <HelloWorld></HelloWorld>
// //    //<ToggleMessage></ToggleMessage>
//  <div className="flex space-x-4 my-4">
//   <Button  color="green">Green</Button>
//   <Button color="red">Red</Button>
//   <Button  color="blue">Blue</Button>
//   <Button color="yellow">Yellow</Button>
//   </div> 
//    );
// };
// export default App;


/*
import Counter from "./Day3/Counter";

function App(){
  return(
    <div>
    <Counter></Counter>
    </div>
    );
  };
  export default App;
  */
 
 /*
 import DynamicRendering from "./Day3/DynamicRendering";
 function App() {
   return (
     <div>
     <DynamicRendering></DynamicRendering>
     </div>
     );
    }
    export default App;
    
    */
   /*
   import GokuTransformation from "./Day3/GokuTransformation";
   
   function App() {
     return (
       <div>
       <GokuTransformation></GokuTransformation>
       </div>
       );
      }
      export default App;
      */
     
  
/*import ToggleMessage from "./Day3/ToggleMessage";

function App() {
  return (
    <div>
      <ToggleMessage></ToggleMessage>
    </div>
  );
}
export default App;*/


// import { useState } from "react";
// import Cart from "./Day3/CoffeeShop/Cart";
// import Menu from "./Day3/CoffeeShop/Menu";
// import Navbar from "./Day3/CoffeeShop/Navbar";
// import categories from "./Day3/CoffeeShop/Products";

// function App() {
//   const [activeCategory, setActiveCategory] = useState(categories[0]);
//   const [products, setProducts] = useState([]);

//   const handleClick = (index) => {
//     setActiveCategory(categories[index]);
//   };

//   const handleAddToCart = (item) => {
//     setProducts([...products, item]);
//   };

//   return (
//     <div className="space-y-4 my-4">
//       <Navbar category={categories} handleClick={handleClick} />
//       <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
//       <Cart products={products} />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Fruit from "./Day-4/Fruit";
// function App() {
//   return (
//     <div>
//       <h1>Enter Your Name Favourite Fruit</h1>
//       <Fruit />
//     </div>
//   );
// }


// export default App;

// import Search from "./Day4/Search";
// import "./Style.css";
//   const App= () => {
//   return (
//     <div>
//       <Search/>
//     </div>
//   );
// };

// export default App;

// App.js
// import React, { useState } from 'react';
// import InfoCard from './Components/InfoCard';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { v4 as uuidv4 } from 'uuid';

// const App = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//   });

//   const [cards, setCards] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     if (formData.title && formData.description) {
//       const newCard = { id: uuidv4(), ...formData };
//       setCards([...cards, newCard]);
//       setFormData({ title: '', description: '' });
//     }
//   };

//   return (
//     <div className="App">
//       <div>
//         <label>Title:</label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Description:</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//       </div>
//       <button onClick={handleSubmit}>Add to Card</button>
//       <div>
//         {cards.map((card) => (
//           <InfoCard key={card.id} data={card} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// App.js

// import React from 'react';
// import SignUp from './Components/Signup';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   return (
//     <div className="App">
//       <SignUp />
//     </div>
//   );
// };

// export default App;

// App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Signup from './Components/Signup';
// import Userdetails from './Components/Userdetails';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Signup} />
//         <Route path="/userdetails" component={Userdetails} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
// import Day4pah from "./Day4pah";
// const App =()=>{
//     return (
//       <Day4pah/>
//     );
// };
// export default App;

// App.js
// import React from 'react';
// import PhotoUpload from './PhotoUpload';
// import './Styled.css';
// const App = () => {
//   const handleUpload = (files) => {
//     // Handle the uploaded files, e.g., display or send to a server
//     console.log('Uploaded files:', files);
//   };

//   return (
//     <div className="App">
//       <h1>Photo Upload App</h1>
//       <PhotoUpload onUpload={handleUpload} />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';

// const SearchableList = ({ items }) => {
//   const [searchQuery, setSearchQuery] = useState('');
  
//   // Filter the list based on the search query
//   const filteredItems = items.filter(item =>
//     item.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       {/* Search input */}
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />

//       {/* Display the filtered list if there's a search query */}
//       {searchQuery && (
//         <ul>
//           {filteredItems.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const sampleItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];

//   return (
//     <div>
//       <h1>Searchable List</h1>
//       <SearchableList items={sampleItems} />
//     </div>
//   );
// };

// export default App;

// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import About from './About';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/about" component={About} />
//         <Route path="/" component={Home} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './December-test-series/Home';
import About from './December-test-series/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
