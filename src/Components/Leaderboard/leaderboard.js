import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import Header from "../common/header.js";
import Overlay from "../common/overlay.js";
import CoinIcon from "../../Assets/images/icons/dollar.png";
import CupIcon from "../../Assets/images/icons/cup.png";
import withStore from "../Unstated/withStore.js";
import LandingStore from "../../Store/LandingStore";
import history from "../../routerHistory.js";
import Navbar from '../Navbar/navbar.js';
import Certi from "../Certi/Certi_React"


const useStyle = makeStyles({
	root: {
		backgroundColor: 'green',
		width: '100%',
		maxWidth: 300,
		margin: '0 auto',
		marginTop: '10%'
	},
	cells: {
		color: 'black',
		textAlign: 'center'
	},
	table: {
		margin: '0 auto'
	},
	pic: {
		borderRadius: '50%'
	}
});

const LeaderItem = ({name, score, index, width}) => {
	return (
		<div className="dashboard_leader">
			<div style={{width: "20%"}}>
				<img src={require("../../Assets/images/icons/trophy" + index + ".png")} width="50" style={{marginTop: "15px"}} />
			</div>
			<div style={{width: "50%", textAlign: "left"}}>
				<div style={{textAlign: 'left', paddingTop: "20px"}}>
					<span style={{fontSize: "20px", color: "white"}}>{name}</span>
				</div>
				<div style={{position: "relative", top: "6px", width: width * 100 + "%"}}>
					<span className = "Dashboard_underliner"></span>
				</div>
			</div>
			<div style={{width: "30%", textAlign: "left", paddingLeft: "10px"}}>
				<img src={CoinIcon} width="24" />
				<span style={{lineHeight: "80px", color: "#FFD700", textAlign: "right", position: "relative", left: "10px"}}>{score}</span>
			</div>
		</div>
	)
}

function LeaderBoard(props) {
	useEffect(() => {
        if(!props.landingStore.state.registerStatus){
            history.push("/account");
            return;
        }
	})
	const classes = useStyle();

	var profilePic = null, name=null, profile = null, leaderBoard = null, max = null,rank = null;
	console.log("hello",props.landingStore.state)
	try{
		profilePic = localStorage.getItem("pic");
		name = localStorage.getItem("name");
		rank = props.landingStore.state.score.rank || null;
		profile = props.landingStore.state.profile || null;
		leaderBoard = props.landingStore.state.scoresheet || null;
		leaderBoard.sort((a, b) => b.score - a.score);
		max = leaderBoard[0].score || null;
	}catch{
		//pass
	}

	return (
		<div>
			<Navbar />
			<div className="Dashboard_Container">
				<Header />
				<Overlay />
				<div className="Dashboard_Content Leaderboard_Content">
					<div style={{margin: "50px auto 10px auto", display: "inline-block"}}>
						<span className="Dashboard_Heading"><u>LEADERBOARD</u></span>
						<span className = "Dashboard_underliner"></span>
					</div>
					{/* <Certi name={name}/> */}
					<div className="dashboard_leaderboard_wrapper">
						<div className="leaderboard_profile">
							<img src={profilePic} width="350" style={{borderRadius: "8px"}} />
							<h3>{name}</h3>
							<div style={{color: "#42C0FB"}}>{profile === null ? "N/A" : profile.sf_id}</div>
							<div style={{color: "#42C0FB"}}>Rank: {profile === null ? "N/A" : rank}</div>
							<div>
								<img src={CoinIcon} width="24" style={{width: "24px"}} />
								<span style={{color: "#FFD700", textAlign: "right", position: "relative", left: "10px"}}>{profile === null ? "N/A" : profile.score}</span>
							</div>
						</div>
						<div className="dashboard_leaderboard">
							<div style={{marginBottom: "10px", display: "inline-flex", justifyContent: "space-around", paddingTop: "10px"}}>
								<img src={CupIcon} width="80" />
								<div style={{display: "block"}}>
									<h2 style={{fontSize: "30px", color: "#FFD700"}}>LEADERBOARD</h2>
									<h3 style={{fontSize: "20px", color: "#FFD700"}}>CA PORTAL, SPRING FEST</h3>
								</div>
							</div>
							{
								leaderBoard === null ?
								"Not Availiable" :
								leaderBoard.map((leader, i) => (
									<LeaderItem key={i} name={leader.name} score={leader.score} index={i+1} width={leader.score / max} />
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withStore([LandingStore])(LeaderBoard);