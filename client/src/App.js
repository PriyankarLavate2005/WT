// client/src/App.js
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import ProductList from './components/ProductList';
import Header from './components/Header';
import './App.css'
import CustomItemContext from './context/ItemContext';

const App = () => {
	return (
		<CustomItemContext>
			  <AppRoutes />
			{/* <Header />
			<ProductList /> */}
		</CustomItemContext>
	);
};

export default App;
