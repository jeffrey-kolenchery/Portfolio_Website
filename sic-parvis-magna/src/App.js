import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default App;
