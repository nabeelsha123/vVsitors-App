import logo from './logo.svg';
import './App.css';
import AddVisitor from './components/AddVisitor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllVisitor from './components/ViewAllVisitor';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddVisitor/>}/>
    <Route path="/View" element={<ViewAllVisitor/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
