import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';


const Menu = () => {
	const [username, setUsername] = useState('');
	useEffect(() => {
		if (localStorage.getItem('username')) {
			setUsername(localStorage.getItem('username'));
		}

	})
	const history = useHistory();
	const signOut = () => {
		localStorage.removeItem('token');
		setTimeout(() => {
			history.push('/');
		}, 1000);
	};
	return (
		<div className='top-wrapper'>
			<div className='top-bar flex-between'>
				<div className='logo'>
					<span>数据可视化</span>
				</div>
				<div>
					<span>{username}</span>
					<button className='btn logout' onClick={signOut}>Logout</button>
				</div>
			</div>
		</div>

	);
};

export default React.memo(Menu);