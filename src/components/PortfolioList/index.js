import React, { useState } from 'react';
import Project from '../Project';

const PortfolioList = ({ tech }) => {
	const [projects] = useState([
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
			<div className="flex-row">
				{projects.map((project, i) => (
					<Project project={project} />
				))}
			</div>
		</div>
	);
};

export default PortfolioList;
