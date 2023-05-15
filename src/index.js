import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Posts } from './contexts/PostsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Posts>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Posts>
);