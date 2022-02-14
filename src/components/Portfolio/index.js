import React from 'react';
import PortfolioList from '../PortfolioList';

function Portfolio({ currentCategory }) {
	const { name, description } = currentCategory;
	return (
		<section id="portfolio">
			<h2>{name}</h2>
			<p>{description}</p>
			<PortfolioList />
		</section>
	);
}

export default Portfolio;
