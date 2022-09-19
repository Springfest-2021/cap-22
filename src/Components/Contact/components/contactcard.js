import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';

const ContactCard = ({ name, email, phone, facebook, role, linkedin, imgname }) => {
	return (
		<div className="grid-item">
			<img src={require('../../../Assets/images/team/' + imgname)}/>
			<div class="contact_info">
				<div>
					<a target="_blank" href={'mailto:' + email}><EmailIcon /></a>
					<a target="_blank" href={facebook}><FacebookIcon /></a>
					<a target="_blank" href={linkedin}><LinkedInIcon /></a>
					<a href={'tel:' + phone}><PhoneIcon /></a>

					<h4><b>{name}</b></h4> 
					<p>{role}</p> 
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
