// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const artists = ["WoahDee", "Ydakalu", "Rapper", "Craxy Girl", "Rakib"]
  // const products = [
  //   {name: "Photoshop", price: "$20.99"},
  //   {name: "Illustrator", price: "$45.99"},
  //   {name: "Premier Pro", price: "$35.99"},
  //   {name: "Adobe XD", price: "$99.99"},
  //   {name: "Adobe Lite", price: "$49.99"}
  // ]
  // const getArtists = artists.map(artist => artist)
  // console.log(getArtists);
  // const getProducts = products.map(product => product.name);
  // console.log(getProducts);
 
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>
        <Users></Users>

        {/* <ul>
          {
          products.map(product => <li>{product.name}</li>)
          }
        </ul> */}
          {/* {
            products.map(product => <ProductInfo product = {product}></ProductInfo>)
          } */}
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => <li> {user.name}</li>)}
      </ul>
    </div>
  );
}

function Count(){
  const [count, setCount] = useState(0);
  // const handleClicked = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1) }>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Clicked</button>
    </div>
  );
}


// function ProductInfo(props){

//   let getBorder = {
//     color: "#2c2c2c",
//     border: "2px solid tomato",
//     margin: "5px",
//     backgroundColor: "#fafafa",
//     height: "200px",
//     width: "200px"
//   }

//   return (
//     <div style = {getBorder}>
//       <h4>{props.product.name} </h4>
//       <h3>{props.product.price} </h3>
//       <button>Buy Now</button>
//     </div>
//   );
// }



export default App;
