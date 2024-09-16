import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Counter from './components/Counter';
import DataFetcher from './components/DataFetcher';
import ThemeButton from './components/ThemeButton';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';

const App: React.FC = () =>{
  return (
    <CartProvider>
      <div className="App">
          <Header />
          <ProductList />
          <Counter />
          <DataFetcher />
          <ThemeButton />
          <Cart />
      </div>
    </CartProvider>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
