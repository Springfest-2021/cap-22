import React from 'react';
import withStore from '../Unstated/withStore.js';
import LandingStore from '../../Store/LandingStore.js';
import Header from '../common/header.js';
import Overlay from '../common/overlay.js';
import { getCAlist } from '../../Services/services.js';
import CACard from './components/caCard.js';
import { withStyles, Grid } from '@material-ui/core';
import history from '../../routerHistory.js';
import Navbar from '../Navbar/navbar.js';

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		justifyContent: 'center'
	},
	control: {
		padding: theme.spacing(2)
	},
	grid: {
		'& .MuiGrid-root': {
			justifyContent: 'center'
		}
	}
});

class Ca extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            workingCA: null
        }
    }
    decompress(s){
        return s.split("**");
    }
    async componentWillMount(){
        if(!this.props.landingStore.state.registerStatus || this.props.landingStore.state.profile.is_caA === 0){
            history.push("/account");
            return;
        }
        const caliststring = this.props.landingStore.state.profile.ca_list;
        const calist = this.decompress(caliststring);
        var workingCA = [];
        calist.forEach(async (ca, index) => {
            let sf_id = "SF" + ca;
            let data = await getCAlist({sf_id: sf_id});
            workingCA.push(data.message);
            this.props.landingStore.setState({cas: workingCA});
            this.setState({loading: false});
            //console.log(this.props.landingStore.state.cas);
        })
    }
    render(){
        const {classes} = this.props;
        return (
            <div>
                <Navbar />
                <div className="Dashboard_Container">
                    <Header />
                    <Overlay />
                    <div className="Dashboard_Content">
                        <div style={{margin: "50px auto 10px auto", display: "inline-block"}}>
                            <span className="Dashboard_Heading"><u>CAMPUS AMBASSADORS</u></span>
                            <span className = "Dashboard_underliner"></span>
                        </div>
                        <div className={"ca_card_wrapper " + classes.root}>
                            <Grid container spacing={3}>
                                {this.state.loading ? "Loading" :
                                    this.props.landingStore.state.cas.map((ca, index) => (
                                        <Grid item key={index} className={classes.grid}>
                                            <CACard
                                                name={ca.name}
                                                email={ca.email}
                                                mobile={ca.mobile}
                                                sf_id={ca.sf_id}
                                                college={ca.college}
                                                city={ca.city}
                                                link={ca.fb_link}
                                            />
                                        </Grid>
                                ))}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(withStore([ LandingStore ])(Ca));
