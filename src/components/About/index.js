import React from 'react';
import coverImage from '../../assets/profilePicture.jpg';

function About() {
	return (
		<section className="flex-row">
			<div >
				<div>
					<img
						className="flex-row"
						src={coverImage}
						className="my-2"
						alt="picture of Kurtis Hight"
					/>
				</div>
				<div id="left">
					<p>
						Hi, my name is Kurtis Hight. I am currently studying Full Stack
						Development at UC Berkley Bootcamp. I have a Bachelor of Arts in
						Business Administration from CSUF. I'm currently working for a
						gaming studio desiging and creating slot machines.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
