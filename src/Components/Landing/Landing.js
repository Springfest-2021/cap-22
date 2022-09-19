import React, { useEffect } from 'react';
import Navbar from './components/landing_main';
import Monologue from './components/monologue';
import Header from './components/header';
import Perks from './components/perks';
import Responsibilities from './components/respon';
import Testimonials from './components/testimonials';
import Contact from "./components/contact";
import Footer from "./components/social";
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: '#9ae4f5',
					overflowX: 'hidden'
				}
			}
		}
	}
});

const askNotification = () => {
	if("Notification" in window){
		if(Notification.permission !== "denied"){
			Notification.requestPermission();
		}
	}
}

function Landing(props) {
	useEffect(() => {
		askNotification();
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
			<Header />
			<Monologue />
			<Perks />
			<Responsibilities />
			<Testimonials />
			<Contact />
			<Footer />
		</ThemeProvider>
	);
}

export default Landing;
