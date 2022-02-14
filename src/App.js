import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
	const [categories] = useState([
		{ name: 'About', description: 'About me page.' },
		{
			name: 'Portfolio',
			description: 'List of my projects.',
		},
		{
			name: 'Contact',
			description: 'Reach out through email or social.',
		},
		{ name: 'Resume', description: 'Download resume.' },
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
			<main>{renderPage()}</main>
			<Footer />
		</div>
	);
}

export default App;
