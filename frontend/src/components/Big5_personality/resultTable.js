import React, { Component } from 'react';
import './resultTable.css';
import { Card } from 'reactstrap';

class Table extends Component {
  render() {

    const { result } = this.props;
    console.log(result)
    
    const tmp = []

    if( result!=null && Object.keys(result) ){

    Object.keys(result).map( (key,val) => (
         tmp.push(result[key])
      ))
    }

    var O_score = tmp[0];
    var C_score = tmp[1];
    var E_score = tmp[2];
    var A_score = tmp[3];
    var N_score = tmp[4];
    var sum = O_score+C_score+E_score+A_score+N_score;
    var O_per = (Math.round(O_score * 100)/sum).toFixed(2);
    var C_per = (Math.round(C_score * 100)/sum).toFixed(2);
    var E_per = (Math.round(E_score * 100)/sum).toFixed(2);
    var A_per = (Math.round(A_score * 100)/sum).toFixed(2);
    var N_per = (Math.round(N_score * 100)/sum).toFixed(2);

    return (
    	   <div className="table-responsive">
    	     <table className="table table-borderless" style={{backgroundColor: '#39498B',color: 'white', boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1), 0 4px 14px 0 rgba(0,0,0,0.12)'}}>
    	       <thead>
    	         <tr>
    	           <th scope="col">Trait</th>
    	           <th scope="col">Score</th>
    	           <th scope="col">Percentage</th>
    	         </tr>
    	       </thead>
    	       <tbody>
    	         <tr >
    	           <td style={{fontFamily: 'sans-serif'}}>Openness</td>
    	           <td style={{fontFamily: 'sans-serif'}}>{(Math.round(O_score * 100)/100).toFixed(1)}</td>
    	           <td style={{fontFamily: 'sans-serif'}}>{O_per}%</td>
    	         </tr>
    	         <tr>
    	           <td style={{fontFamily: 'sans-serif'}}>Conscientiousness</td>
    	           <td style={{fontFamily: 'sans-serif'}}>{(Math.round(C_score * 100)/100).toFixed(1)}</td>
    	           <td style={{fontFamily: 'sans-serif'}}>{C_per}%</td>
    	         </tr>
    	         <tr>
    	           <td style={{fontFamily: 'sans-serif'}}>Extraversion</td>
    	           <td style={{fontFamily: 'sans-serif'}}>{(Math.round(E_score * 100)/100).toFixed(1)}</td>
    	           <td style={{fontFamily: 'sans-serif'}}>{E_per}%</td>
    	         </tr>
    	         <tr>
    	           <td style={{fontFamily: 'sans-serif'}}>Agreeableness</td>
    	           <td style={{fontFamily: 'sans-serif'}}>{(Math.round(A_score * 100)/100).toFixed(1)}</td>
    	           <td style={{fontFamily: 'sans-serif'}}>{A_per}%</td>
    	         </tr>
    	         <tr>
    	           <td style={{fontFamily: 'sans-serif'}}>Neuroticism</td>
    	           <td style={{fontFamily: 'sans-serif'}}>{(Math.round(N_score * 100)/100).toFixed(1)}</td>
    	           <td style={{fontFamily: 'sans-serif'}}>{N_per}%</td>
    	         </tr>
    	       </tbody>
    	     </table>
    	   </div>
    )
  }
};
 
export default Table;