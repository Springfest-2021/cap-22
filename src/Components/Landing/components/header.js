import React from 'react';
import './stylesheets/header.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Header(props) {
	function scroll_down(){
		console.log('Scroll Down');
		var sb = document.getElementsByClassName('sidebar')[0];
		var elmnt = sb.getElementsByTagName('li')[1];
		elmnt.click();
	}
	return (
		<div className="header">
			{/* <div className="headerm">
				<div className="header-text">
					<h5>— Spring Fest 2023</h5>
					<h1>Campus Ambassador Portal</h1>
					<p><em>Be a leader...</em></p>
				</div>
				<img src="https://gumlet.assettype.com/nationalherald%2F2021-03%2Fe74edd4a-954e-4aaf-9ec0-f51d12327715%2Fimg2.jpg" alt="" />
			</div>			 */}
			
			<div className="header-text">
				<h2>Spring Fest</h2>
				<p><b>Presents</b></p>
				<h1>Campus Ambassador Program</h1>
				<p><i>In association with Cuvette Tech</i></p>
			</div>
			<ul className='slideshow'>
				<li>
					<span></span>
				</li>
				<li>
					<span></span>
				</li>
				<li>
					<span></span>
				</li>
				<li>
					<span></span>
				</li>
			</ul>				
			<div className="header-contact-links">
				<span className="contact_card_link">
					<a href="https://www.facebook.com/springfest.iitkgp" target="_blank">
						<FacebookIcon style={{ fontSize: '32px', color: 'blue' }} />
					</a>
				</span>
				<span className="contact_card_link">
					<a href={'https://www.linkedin.com/in/sfiitkgp/'} target="_blank">
						<LinkedInIcon style={{ fontSize: '32px', color: '#648DAE' }} />
					</a>
				</span>
				<span className="contact_card_link">
					<a href={'https://www.twitter.com/springfest_kgp/'} target="_blank">
						<TwitterIcon style={{ fontSize: '32px', color: '#50ABF1' }} />
					</a>
				</span>

				<a href="#" onClick={scroll_down}>
					<div id="down-arrow-header">
						<div class="chevron"></div>
						<div class="chevron"></div>
						<div class="chevron"></div>
					</div>
				</a>

				<span className="contact_card_link">
					<a href={'https://www.youtube.com/user/SpringFestForever/'} target="_blank">
						<YouTubeIcon style={{ fontSize: '32px', color: '#FF0000' }} />
					</a>
				</span>
				<span className="contact_card_link">
					<a href={'https://www.instagram.com/iitkgp.springfest/'} target="_blank">
						<InstagramIcon style={{ fontSize: '32px', color: '#7244BD' }} />
					</a>
				</span>
				<span className="contact_card_link">
					<a href={'https://www.snapchat.com/add/spring-fest/'} target="_blank">
						<i style={{ fontSize: '32px', color: '#000000' }} className="fa fa-snapchat" />
					</a>
				</span>
			</div>
		</div>
	);
}

export default Header;
