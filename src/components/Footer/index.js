import React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';

const Footer = () => {
	return (
		<footer className="w-100 mt-auto bg-secondary p-4">
			<div className="container">
				<h6>
					<span>
						<a href="https://github.com/mockcomic">
							<BsGithub />
						</a>
						<a href="https://www.linkedin.com/in/kurtishight/">
							<ImLinkedin />
						</a>
						<a href="https://twitter.com/Mockkomic">
							<BsTwitter />
						</a>
					</span>
				</h6>
			</div>
		</footer>
	);
};

export default Footer;
