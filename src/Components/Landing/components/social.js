import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
	return (
		<div
			style={{
				width: '380px',
				display: 'inline-flex',
				justifyContent: 'space-between',
				textAlign: 'center',
				position: 'relative',
				left: 'calc(50vw - 190px)',
				marginTop: '30px',
				marginBottom: '12px'
			}}
		>
			<span className="contact_card_link" style={{ backgroundColor: '#9989f5' }}>
				<a href="https://www.facebook.com/springfest.iitkgp">
					<FacebookIcon style={{ fontSize: '32px', color: 'blue' }} />
				</a>
			</span>
			<span className="contact_card_link" style={{ backgroundColor: '#b6ebf2' }}>
				<a href={'https://www.linkedin.com/in/sfiitkgp/'}>
					<LinkedInIcon style={{ fontSize: '32px', color: '#648DAE' }} />
				</a>
			</span>
			<span className="contact_card_link" style={{ backgroundColor: '#97c9f0' }}>
				<a href={'https://www.twitter.com/springfest_kgp/'}>
					<TwitterIcon style={{ fontSize: '32px', color: '#50ABF1' }} />
				</a>
			</span>
			<span className="contact_card_link" style={{ backgroundColor: '#f59090' }}>
				<a href={'https://www.youtube.com/user/SpringFestForever/'}>
					<YouTubeIcon style={{ fontSize: '32px', color: '#FF0000' }} />
				</a>
			</span>
			<span className="contact_card_link" style={{ backgroundColor: '#ceb0ff' }}>
				<a href={'https://www.instagram.com/iitkgp.springfest/'}>
					<InstagramIcon style={{ fontSize: '32px', color: '#7244BD' }} />
				</a>
			</span>
			<span className="contact_card_link" style={{ backgroundColor: '#f2df0a' }}>
				<a href={'https://www.snapchat.com/add/spring-fest/'}>
					<i style={{ fontSize: '32px', color: '#000000' }} className="fa fa-snapchat" />
				</a>
			</span>
		</div>
	);
};

export default Footer;
