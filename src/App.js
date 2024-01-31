import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import About from './Pages/About';
import Home from './Pages/Home';
import Default from './Pages/Default';
import Dashboard from './Pages/Dashboard';
import Blog from './Pages/Blog';
import UserList from './Pages/UserList'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="about" element={<About />} />
           <Route path="/" element={<Home />} />
           <Route path="dashboard" element={<Dashboard />} />
           <Route path="blog" element={<Blog />} />
           <Route path="users" element={<UserList />} /> {/* Ruta para UserList */}
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

