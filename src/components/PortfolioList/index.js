import React, { useState } from 'react';
import Project from '../Project';

const PortfolioList = () => {
	const [projects] = useState([
		{
			name: 'Flavor Express',
			src: 'flavor-express.png',
			description:
				'A website where you can find delicious food recipes that are easy and fast to make.',
			link: 'https://github.com/mockcomic/MockBot',
			git: 'https://flavor-express.herokuapp.com/',
		},
		{
			name: 'MusicMatcher',
			src: 'MusicMatcher.png',
			description:
				'A website where you search an artists and it gives you five similar artists and five of their top tracks with audio preivew and lyrics.',
			link: 'https://github.com/mockcomic/FlavorExpress',
			git: 'https://github.com/mockcomic/MusicMatcher',
		},
		{
			name: 'MockBot',
			src: 'MockBot.gif',
			description: 'A multi purpose Discord bot.',
			link: 'https://github.com/mockcomic/MockBot',
			git: 'https://github.com/mockcomic/MockBot',
		},
		{
			name: 'Weather Lookup',
			src: 'weather.png',
			description: `A weather forcast website I made for the UC Berkeley bootcamp. The CSS isn't my best work but it gets the job done. I will most likely come back in the future and fine tune the weather cards.`,
			link: 'https://mockcomic.github.io/Week6Challenge-Server-Side-APIs/',
			git: 'https://github.com/mockcomic/Week6Challenge-Server-Side-APIs',
		},
		{
			name: 'Coding Quiz',
			src: 'codingQuiz.png',
			description:
				'A coding quiz I made for the UC Berkeley bootcamp. See if you can complete the quiz before the time runs out!',
			link: 'https://mockcomic.github.io/Week4Challenge-WebAPIsChallengeCodeQuiz/',
			git: 'https://github.com/mockcomic/Week4Challenge-WebAPIsChallengeCodeQuiz',
		},
		{
			name: 'Password Generator',
			src: 'PasswordGenerator.png',
			description:
				'A password generator I made for the UC Berkeley bootcamp. Feel free to use the passwords for your own accounts!			',
			link: 'https://mockcomic.github.io/Week3Challenge-PasswordGenerator/',
			git: 'https://github.com/mockcomic/Week3Challenge-PasswordGenerator',
		},
	]);

	return (
		<div>
			<div className="section">
				{projects.map(project => (
					<Project project={project} />
				))}
			</div>
		</div>
	);
};

export default PortfolioList;
