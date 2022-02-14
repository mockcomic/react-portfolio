import React from 'react';

function Resume({ currentCategory }) {
	const { name, description } = currentCategory;
	return (
		<section id="resume" className="flex-row">
			<div>
				<h2>{name}</h2>
				<p>{description}</p>
				<a href={require('../../assets/resume.pdf')} download>
					<button>Resume</button>
				</a>
			</div>

		</section>
	);
}

export default Resume;