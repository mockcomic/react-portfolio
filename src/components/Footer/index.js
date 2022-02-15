import React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';

const Footer = () => {
	return (
		<footer className="foot">
			<div>
				<a className="icon is-large" href="https://github.com/mockcomic">
					<BsGithub />
				</a>
				<a className="icon is-large" href="https://www.linkedin.com/in/kurtishight/">
					<ImLinkedin />
				</a>
				<a className="icon is-large" href="https://twitter.com/Mockkomic">
					<BsTwitter />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
