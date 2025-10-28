import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import CareerPage from './pages/CareerPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
