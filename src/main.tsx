import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Button from './components/Button';
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Header />
		<Button />
	</React.StrictMode>,
);
