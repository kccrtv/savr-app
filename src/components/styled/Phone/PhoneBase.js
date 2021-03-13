import React, { Fragment, Component, useState, useEffect } from 'react';
import MainBody from './MainBody';
import PhoneBody from './PhoneBody';
import PhoneTop from './PhoneTop';
import NavBar from '../Nav/NavBar';
import NavBarStyle from '../Nav/NavBar';
import Content from './Content';

function PhoneBase() {
	return (
		<MainBody>
			<PhoneBody>
				<PhoneTop />
				<Content></Content>
			</PhoneBody>
			<NavBar />
		</MainBody>
	);
}

export default PhoneBase;
