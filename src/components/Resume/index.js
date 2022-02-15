import React from 'react';
import {
	SiJavascript,
	SiInsomnia,
	SiGraphql,
	SiHeroku,
	SiBulma,
} from 'react-icons/si';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';

function Resume({}) {
	return (
		<section id="resume" className="flex-row">
			<div>
				<ul id="tools" className="mx-5">
					<p>List of tools</p>
					<li>
						<AiFillGithub className="mx-5" />
						GitHub
					</li>
					<li>
						<DiMongodb className="mx-5" />
						MongoDB
					</li>
					<li>
						<SiJavascript className="mx-5" />
						JavaScript
					</li>
					<li>
						<AiFillHtml5 className="mx-5" />
						HTML
					</li>
					<li>
						{' '}
						<SiInsomnia className="mx-5" />
						Insomnia
					</li>
					<li>
						{' '}
						<DiMysql className="mx-5" />
						MySQL
					</li>
					<li>
						{' '}
						<GrReactjs className="mx-5" />
						React
					</li>
					<li>
						<SiGraphql className="mx-5" />
						GraphQL
					</li>
					<li>
						{' '}
						<SiHeroku className="mx-5" />
						Heroku
					</li>
					<li>
						{' '}
						<SiBulma className="mx-5" />
						Bulma
					</li>
				</ul>
			</div>

			<a href={require('../../assets/resume.pdf')} download>
				<button className="button is-primary">Resume</button>
			</a>
		</section>
	);
}

export default Resume;
