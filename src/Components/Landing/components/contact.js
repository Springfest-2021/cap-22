import React from 'react';
import ContactCard from '../../Contact/components/contactcard';
import ContactData from '../../../Assets/Json/Contacts.json';
import './stylesheets/contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    function Contact_grid_scrollDown(){
        var grid_container = document.getElementsByClassName('grid-container')[0];
        grid_container.scrollTop += 100;
    }
    function Contact_grid_scrollUp(){
        var grid_container = document.getElementsByClassName('grid-container')[0];
        grid_container.scrollTop -= 100;
    }
	return (
		<div className="contact">
			<h2 style={{
                fontFamily: "Major Mono Display"
            }}>Our Team</h2>
			<div className="grid-container">
                        {
                            ContactData.team.map((data, index) => (
                                <ContactCard 
                                    key={index}
                                    name={data.name}
                                    email={data.email}
                                    imgname={data.imageName}
                                    phone={data.phone}
                                    facebook={data.facebook}
                                    linkedin={data.linkedin}
                                    role={data.role}
                                />
                            ))
                        }
                </div>
                <div id="contact-scroll-down">
                    <button  onClick={Contact_grid_scrollUp}> <FontAwesomeIcon className="icons" icon={faAngleDoubleUp} /> </button> <br /><br /><br /><br /><br />
                    <button  onClick={Contact_grid_scrollDown}> <FontAwesomeIcon className="icons" icon={faAngleDoubleDown} /> </button>
                </div>
			</div>
	);
};

export default Contact;
