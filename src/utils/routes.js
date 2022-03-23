import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Components
import Navbar from '../components/Navbar';
//Pages
import WelcomePage from '../pages/WelcomePage';

function Router() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}

      <Routes>
        <Route exact path="/" element={<Navbar />}>
          <Route index element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Route>
        <Route path="/welcomeff" element={<h1>welvcomne</h1>} />
        <Route path="/signup" element={<h1>welvcomne</h1>} />

        <Route path="*" element={<h1>welvcomne</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
