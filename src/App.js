import './App.css';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Product from './Product';
import Header from './Header';
import Footer from './Footer';
const App = () => {
 
 
 return(
    <div className='content'>
    <Header />
        <Routes>
             <Route path='/' element={<Product/>}    />
             
        </Routes>
        <Footer />
    </div>
    
 )
  
  
}
export default App;


