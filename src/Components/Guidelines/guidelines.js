import React, { useState, useEffect } from 'react';
import data from '../../Assets/Json/Guidelines.json';
import { makeStyles, ListSubHeader, List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from '../common/header.js';
import Overlay from '../common/overlay.js';
import { withRouter } from 'react-router-dom';
import history from '../../routerHistory.js';
import withStore from '../Unstated/withStore.js';
import LandingStore from '../../Store/LandingStore';
import Navbar from '../Navbar/navbar.js';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: '#333333',
		color: 'white',
		padding: '0',
		borderRadius: '8px'
	}
}));

const containerStyle = {
	width: '80%',
	margin: '10px auto auto auto',
	textAlign: 'center'
};

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark'
	}
});

const Guidelines = (props) => {
	const classes = useStyles();
	const [ open, setOpen ] = useState(Array(8).fill(false));

	useEffect(() => {
		if (!props.landingStore.state.registerStatus) {
			history.push('/account');
			return;
		}
	});

	const toggle = (index) => {
		let state = Array(8).fill(false);
		state[index] = !open[index];
		setOpen(state);
	};

	return (
		<div>
			<Navbar />
			<div className="Dashboard_Container">
				<Header />
				<Overlay />
				<div className="Dashboard_Content">
					<div style={{ margin: '50px auto 10px auto', display: 'inline-block' }}>
						<span className="Dashboard_Heading">
							<u>GUIDELINES</u>
						</span>
						<span className="Dashboard_underliner" />
					</div>
					<div style={containerStyle}>
						<List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
							{data.map((guidelines, index) => {
								return (
									<div key={index}>
										<ListItem button onClick={() => toggle(index)}>
											<ListItemText primary={guidelines.title} />
											{open[index] ? <ExpandLess /> : <ExpandMore />}
										</ListItem>
										<Collapse in={open[index]} unmountOnExit>
											<List component="div" disablePadding style={{ backgroundColor: '#424242' }}>
												<ListItem button className={classes.nested}>
													<ul>
														{guidelines.text.map((t, i) => (
															<li style={{ listStyleType: 'none' }} key={i}>
																{t}
															</li>
														))}
													</ul>
												</ListItem>
											</List>
										</Collapse>
									</div>
								);
							})}
						</List>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withStore([ LandingStore ])(Guidelines);
