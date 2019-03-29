import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6

class PlanDetails extends Component {
    constructor(props){
		console.log(props);
        super(props) 
        this.state = {
        
        }
    }

    render(){
		const planner = this.props.planner;
		console.log(this.props);
        return (
            <div >
                <h1>Destinations</h1>
				<ul>
				  {planner.destinations.map(destination => (
					<li><a href={destination.url}>{destination.text}</a></li>
				  ))}
				</ul>
            </div>
        )
    }
}

PlanDetails.propTypes = {

};

export default PlanDetails
