import React, { useEffect } from 'react';

function Header(props) {
	const { categories = [], setCurrentCategory, currentCategory } = props;

	useEffect(() => {
		document.title = currentCategory.name;
	}, [currentCategory]);

	return (
		<header className="flex-row px-1">
			<h1>
				<a href="/">Kurtis Hight</a>
			</h1>
			<nav>
				<ul className="flex-row">
					{categories.map(category => (
						<li
							className={`mx-2 ${
								currentCategory.name === category.name && 'navActive'
							}`}
							key={category.name}
						>
							<span
								onClick={() => {
									setCurrentCategory(category);
								}}
							>
								{category.name}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
