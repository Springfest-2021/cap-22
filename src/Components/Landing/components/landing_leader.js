import React from 'react';
import Slide from 'react-reveal/Slide';
import withStore from '../../Unstated/withStore';
import LandingStore from '../store/LandingStore';
import '../../../Styles/landing.sass';
import '../../../Styles/landing_leader.scss';

function LandingLeader() {
	return (
		<div className="landing_leader_container">
			<div className="landing-leader">
				<Slide left delay={100} style={{ height: '60px' }}>
					<div className="content__container">
						<p className="content__container__text">A Leader is Never</p>
						<ul className="content__container__list">
							{this.props.landingStore.state.never.map((item, index) => (
								<li key={index} className="content__container__list__item">
									{item}
								</li>
							))}
						</ul>
					</div>
				</Slide>
				<Slide right delay={100}>
					<div className="content__container">
						<p className="content__container__text">A Leader is Always</p>
						<ul className="content__container__list">
							{this.props.landingStore.state.always.map((item, index) => (
								<li key={index} className="content__container__list__item">
									{item}
								</li>
							))}
						</ul>
					</div>
				</Slide>
			</div>
		</div>
	);
}

export default withStore([ LandingStore ])(LandingLeader);
