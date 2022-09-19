import React from 'react';
import useElementOnScreen from "./useElementOnScreen"
import './stylesheets/monologue.css';

function Monologue(props) {
	const [ containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "50px", 
        threshold:0.1
      })
	return (
		<React.Fragment>
			<div className="monologue" ref={containerRef}>
				{isVisible && <div>
				<section className="para">
					<h1 style={{
						fontFamily: "Major Mono Display"
					}}>About Us</h1>
					<p><em>Spring Fest</em>, IIT Kharagpur is one of the largest Social and Cultural Fests in India. Embodying the true spirit of youth, Spring Fest provides a platform for young talent from all over India to showcase their varied talents. As we enter into the 63rd Edition all we are looking forward to is to leave behind a legacy of exquisite experiences. Now, you too have a chance to become a part of this cultural extravaganza. With Campus Ambassador Program you get a chance to be an extended part of the Organizing team of Spring Fest 2023.</p>
				</section>
				<div class="flex-wrapper">
					<div class="single-chart">
						<svg viewBox="0 0 36 36" class="circular-chart">
						<path class="circle-bg"
							d="M18 2.0845
							a 15.9155 15.9155 0 0 1 0 31.831
							a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
						<path class="circle"
						style={{stroke: "#4CC790"}}
							stroke-dasharray="95, 100"
							d="M18 2.0845
							a 15.9155 15.9155 0 0 1 0 31.831
							a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
						<text x="18" y="20.35" class="percentage">80k+</text>
						</svg>
						<h2>Footfall</h2>
					</div>
					
					<div class="single-chart">
						<svg viewBox="0 0 36 36" class="circular-chart">
						<path class="circle-bg"
							d="M18 2.0845
							a 15.9155 15.9155 0 0 1 0 31.831
							a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
						<path class="circle"
							style={{stroke: "#3c9ee5"}}
							stroke-dasharray="95, 100"
							d="M18 2.0845
							a 15.9155 15.9155 0 0 1 0 31.831
							a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
						<text x="18" y="20.35" class="percentage">660+</text>
						</svg>
						<h2>Colleges</h2>
					</div>

					<div class="single-chart">
						<svg viewBox="0 0 36 36" class="circular-chart">
						<path class="circle-bg"
							d="M18 2.0845
							a 15.9155 15.9155 0 0 1 0 31.831
							a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
						<path class="circle"
							style={{stroke: "#ff9f00"}}
							stroke-dasharray="95, 100"
							d="M18 2.0845
							a 15.9155 15.9155 0 0 1 0 31.831
							a 15.9155 15.9155 0 0 1 0 -31.831"
						/>
						<text x="18" y="20.35" class="percentage">30 lac</text>
						</svg>
						<h2>Website Hits</h2>
					</div>  
				</div>
			</div>
				}
			</div>
		</React.Fragment>
	);
}

export default Monologue;