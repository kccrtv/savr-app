import React, { Fragment, Component, useState, useEffect } from 'react';
import MainBody from './MainBody';
import PhoneBody from './PhoneBody';
import PhoneTop from './PhoneTop';
import NavBar from '../Nav/NavBar';
import NavBarStyle from '../Nav/NavBar';

function PhoneBase() {
	return (
		<Fragment>
			<MainBody>
				<PhoneBody>
					<PhoneTop />
				</PhoneBody>
				<NavBar />
			</MainBody>
		</Fragment>
	);
}

export default PhoneBase;
