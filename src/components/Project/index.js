import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Project = ({ project }) => {
	return (
		<div className="mx-2 my-1">
			<h3>
				{project.name}
				<span id="icon" className="mx-5">
					<a href={project.git}>
						<BsGithub />
					</a>
				</span>
			</h3>
			<a href={project.link}>
				<img
					src={require(`../../assets/projects/${project.src}`)}
					alt={project.name}
					className="img-thumbnail"
					key={project.name}
				/>
			</a>
			<p>{project.description}</p>
		</div>
	);
};

export default Project;
