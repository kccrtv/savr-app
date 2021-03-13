import React, { Fragment, Component, useState, useEffect } from 'react';
import MainBody from './MainBody';
import PhoneBody from './PhoneBody';
import PhoneTop from './PhoneTop';
import NavBar from '../Nav/NavBar';
import NavBarStyle from '../Nav/NavBar';

function PhoneBase() {
	return (
		<MainBody>
			<PhoneBody>
				<PhoneTop />
			</PhoneBody>
			<NavBar />
		</MainBody>
	);
}

export default PhoneBase;
