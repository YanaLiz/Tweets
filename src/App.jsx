
import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './pages/Home/Home';
import { Tweets } from './pages/Tweets/Tweets';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

function App() {


  return (
    <Routes>
      <Route path='/' Component={SharedLayout}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
}

export default App
