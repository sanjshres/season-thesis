
import './App.scss';
import { Route,BrowserRouter as Router, Routes} from "react-router-dom"

import { Suspense, lazy } from 'react';
import Categories from './pages/categories';
import BootstrapTable from './components/boostrapTable';
function App() {
  const Home = lazy(() => import("./pages/home"))
  return (
    <Suspense >
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category" element={<BootstrapTable />} />
    </Routes>
    </Router>
    </Suspense>
  );
}

export default App;
