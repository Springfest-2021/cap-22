import React from 'react';
import '../../../Styles/testimonials.css';

export default class Testimonials extends React.Component {

	state = {
		cas: [
		{
			'name': 'Satyarth Pandey',
			'content': 'Appealing the essential being of youth ,spring fest is the biggest and most phenomenal college fest I witnessed. The best part of my sf trip was to listen \
                  to shalmali live! Thanks to team sf for all the background score that made the event more lively and joyous.'
		},
		{
			'name': 'Anirban Roy',
			'content': 'Spring Fest, the name is a brand in itself and truly it lived upto my expectations as one of the best college festivals in India. My experience as a \
								 Campus Ambassador was very intriguing, fun and most importantly I got to be a part of an amazing experience. And I am looking forward to visit Spring Fest again.'
		},
		{
			'name': 'Shivani Matukumalli',
			'content': "Spring fest in itself is a whole other world. Being there and getting to look at all the talent and energy is something one would always cherish. Those three \
									days spent over there were the most cherishable ones. As a campus ambassador, my experience at IIT KGP was unforgettable and one of the best ones amongst my 'unforgettables'."
		},
		{
			'name': 'Yogesh Garimella',
			'content': 'Spring Fest 2018 will be a remarkable experience in my life. The memories that I and my team "Kalakrithi" made are indelible.\
       The competitiveness at IIT KGP encourages and boosts up us to become better performers and artists. \
      Finally I would like to conclude that the hospitality provided by the SF team and the charming nature of the spring fest makes me and my team visit IIT Kharagpur every year.'
		}
		]
	}

	render() {
		return (
			<div className="test-container">
				<div className="test-head">TESTIMONIALS</div>
				<div className="testimonial-slider">
					{this.state.cas.map((ca, i) => {
						return (
							<div key={i} className={"items item-" + i}>
								<div className="test-img">
									<img src={require("../../../Assets/images/ca/" + (i+1).toString() + ".jpg")} className="test-img"/>
								</div>
								<div className="test-text">
									<i>{ca.content}</i>
									<br/><br/>
										<b>-{ca.name}</b>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
