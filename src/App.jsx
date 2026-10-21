import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import GlassSolutions from './pages/GlassSolutions';
import PlywoodSolutions from './pages/PlywoodSolutions';
import ServicesProcess from './pages/ServicesProcess';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Quality from './pages/Quality';
import Sustainability from './pages/Sustainability';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/glass-solutions" element={<GlassSolutions />} />
        <Route path="/plywood-solutions" element={<PlywoodSolutions />} />
        <Route path="/process" element={<ServicesProcess />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Layout>
  );
}
