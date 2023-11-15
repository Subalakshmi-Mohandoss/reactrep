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
import DynamicRendering from "./Day3/DynamicRendering";
function App() {
  return (
    <div>
      <DynamicRendering></DynamicRendering>
    </div>
 );
}
export default App;





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

