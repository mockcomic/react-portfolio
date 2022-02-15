import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import 'bulma/css/bulma.css'


function App() {
	const [categories] = useState([
		{ name: 'About' },
		{ name: 'Portfolio' },
		{ name: 'Contact' },
		{ name: 'Resume' },
	]);

	const renderPage = () => {
		if (currentCategory.name === 'Portfolio') {
			return <Portfolio currentCategory={currentCategory} />;
		}
		if (currentCategory.name === 'About') {
			return <About currentCategory={currentCategory} />;
		}
		if (currentCategory.name === 'Contact') {
			return <Contact currentCategory={currentCategory} />;
		}
		if (currentCategory.name === 'Resume') {
			return <Resume currentCategory={currentCategory} />;
		}
	};

	const [currentCategory, setCurrentCategory] = useState(categories[0]);
	return (
		<div>
			<Header
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
			></Header>
			<main className="container.is-fullhd">{renderPage()}</main>
			<Footer />
		</div>
	);
}

export default App;
