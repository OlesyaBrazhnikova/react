import React from 'react';
import classes from './UserModal.module.css';

function UserModal({children, visible, setVisible}) {
	const containerClass = [classes.userModule];

	if (visible) {
		containerClass.push(classes.active);
	}

	return (
		<div className={containerClass.join(' ')} onClick={() => setVisible(false)}>
			<div className={classes.userModuleContent}>{children}</div>
		</div>
	);
}

export default UserModal;