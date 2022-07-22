import './App.css';
import { Route, Routes } from "react-router-dom";
import MainComponents from './views/MainComponents';

function App() {
  return (
    <Routes>
      <Route path="" element={<MainComponents />} />
    </Routes>
  );
}

export default App;
