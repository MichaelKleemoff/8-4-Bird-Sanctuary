/** @format */

import React from 'react';
import birdData from './data/birds';
import BirdCards from './Components/BirdCards';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import { useState } from 'react';

const App = () => {
	const [cart, setCart] = useState([]);

	return (
		<div>
			<Cart cart={cart} setCart={setCart} />
			<Checkout />
			<BirdCards birds={birdData} setCart={setCart} cart={cart} />
		</div>
	);
};

export default App;
