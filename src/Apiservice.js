import React, { Component } from 'react'
import axios from 'axios'
import { throwError } from 'rxjs';


function apiservice(ApiComponent) {
	class Apiservice extends React.Component {
		constructor(props){
			super(props);
			this.state = {
				destinations: [],
				vacations: [],
				itineraries: []
			}
			console.log('ddd');
			this.loadData.bind(this);
			this.splitValue.bind(this);
			this.uniqueArray.bind(this);
			this.sortJSON.bind(this);
		}
		
		loadData(){
			console.log('sss');
			const self = this;
			axios
			  .get('sample.json')
			  .then((res) => {
					const data = res.data;
					this.setState({
					  destinations: this.sortJSON(this.uniqueArray(data.destinations)),
					  vacations: this.uniqueArray(data.vacations),
					  itineraries: this.uniqueArray(data.itineraries)
					});
				})
			  .catch((err)=> {
				  return throwError(err);
			  })
			  
		  }
		
		splitValue(arrArg){
			console.log(arrArg);
			var newObj = {};
			var newArr = [];
			var omitToSplit = ['united-kingdom', 'south-africa', 'new-zealand'];
			for (var i in arrArg) {
				var tmpStr = {};
				tmpStr.text = arrArg[i].text;
				if(arrArg[i].text.indexOf('-') > 0 && (omitToSplit.indexOf(arrArg[i].text.toLowerCase()) == -1 )) {
					tmpStr.text = arrArg[i].text.split('-')[0];
				}
				tmpStr.url = arrArg[i].url;
				newObj[i] = tmpStr;
				newArr.push(newObj[i]);
			}
			return newArr;
		}
		
		uniqueArray(arrArg){
			arrArg = this.splitValue(arrArg);
			return arrArg.filter(function (a) {
				return !this[a.text] && (this[a.text] = true);
			}, Object.create(null));
		}

		sortJSON(arrArg){
			return arrArg.sort(function(a, b) {
				var textA = a.text.toUpperCase();
				var textB = b.text.toUpperCase();
				return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
			});
		}

		render(){
			 return ('<ApiComponent />');
		}
	}

	Apiservice.propTypes = {

	};
	
	return Apiservice;
}
export default apiservice