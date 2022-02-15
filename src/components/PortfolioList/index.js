import React, { useState } from 'react';
import Project from '../Project';

const PortfolioList = ({ tech }) => {
	const [projects] = useState([
		{
			name: 'Flavor Express',
			src: 'flavor-express.png',
			tech: 'Fullstack',
			description:
				'A website where you can find delicious food recipes that are easy and fast to make.',
			link: 'https://github.com/mockcomic/MockBot',
			git: 'https://flavor-express.herokuapp.com/',
		},
		{
			name: 'MusicMatcher',
			src: 'MusicMatcher.png',
			tech: 'API,Frontend',
			description:
				'A website where you search an artists and it gives you five similar artists and five of their top tracks with audio preivew and lyrics.',
			link: 'https://github.com/mockcomic/FlavorExpress',
			git: 'https://github.com/mockcomic/MusicMatcher',
		},
		{
			name: 'MockBot',
			src: 'MockBot.gif',
			tech: 'Backend',
			description: 'A multi purpose Discord bot.',
			link: 'https://github.com/mockcomic/MockBot',
			git: 'https://github.com/mockcomic/MockBot',
		},
	]);

	return (
		<div>
			<div>
				{projects.map((project, i) => (
					<Project project={project} />
				))}
			</div>
		</div>
	);
};

export default PortfolioList;
