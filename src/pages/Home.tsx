import React from 'react';
import Product from "./product/Product";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

document.body.style.overflowX = 'hidden';

const Home: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Product />} />
            </Routes>
        </Router>
    );
}

export default Home;