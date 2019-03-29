import React, { Component } from 'react'
import axios from 'axios'
import Apiservice from './Apiservice'
import Pagination from './Pagination'
import PropTypes from 'prop-types' //ES6

const PlanDetails = Apiservice(PlanDetails);

class Planner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
			destinations: [],
			vacations: [],
			itineraries: []
        }
    }
	
	componentDidMount(){
		const self = this;
		console.log(Apiservice.loadData())
		  
	  }
	
    render(){
		
        return (
		
            <div >
                <h1>Planner</h1>
                <PlanDetails />
                <Pagination />
			 </div>
        )
    }
}

Planner.propTypes = {

};

export default Planner
