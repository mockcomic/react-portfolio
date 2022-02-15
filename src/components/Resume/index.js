import React from 'react';

function Resume({ currentCategory }) {
	const { name, description } = currentCategory;
	return (
		<section id="resume" className="flex-row">
			<div>
				<div id="outer-tools">
					<ul id="tools" className="mx-5">
						<li>GitHub</li>
						<li>MongoDB</li>
						<li>Node.js</li>
						<li>Express</li>
						<li>JavaScript</li>
						<li>HTML</li>
						<li>Insomnia</li>
						<li>MySQL</li>
						<li>React</li>
						<li>GraphQL</li>
						<li>Heroku</li>
						<li>Bulma</li>
					</ul>
				</div>
				<a href={require('../../assets/resume.pdf')} download>
					<button className="button is-primary">Resume</button>
				</a>
			</div>
		</section>
	);
}

export default Resume;
