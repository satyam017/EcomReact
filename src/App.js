import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './component/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;