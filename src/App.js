import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllReview from './components/AllReview/AllReview';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element= {<Home></Home>}></Route>
        <Route path='/reviews' element= {<AllReview></AllReview>}></Route>
        <Route path='/dashboard' element= {<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element = {<Blogs></Blogs>}></Route>
        <Route path= '*' element = {<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
