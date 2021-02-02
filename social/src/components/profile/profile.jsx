import React from 'react';

import './profile.css';

const Profile = () => {
	return (
		<main className='content'>
			<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
			<div>
				avatar + description
				</div>
			<div>
				My posts
					<div>
					New post
					</div>
				<div>
					<p>Post 1</p>
					<p>Post 2</p>
				</div>
			</div>
		</main>
	);
};

export default Profile;