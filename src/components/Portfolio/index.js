import React from 'react';
import PortfolioList from '../PortfolioList';

function Portfolio({ currentCategory }) {
	const { name } = currentCategory;
	return (
		<div id="portfolio">
			<article>
			<h2>{name}</h2>
			<PortfolioList />
			</article>
		</div>
	);
}

export default Portfolio;
