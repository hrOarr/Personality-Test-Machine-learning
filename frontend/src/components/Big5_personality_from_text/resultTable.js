import React, { Component } from 'react';

class Table extends Component {
  render() {

    const { result } = this.props;
    console.log(result)
    
    const tmp = []

    if( result!=null && Object.keys(result) ){

    Object.keys(result).map( (key,val) => {
         tmp.push(result[key]);
      })
    }

    var O_cat = tmp[1];
    var C_cat = tmp[4];
    var E_cat = tmp[7];
    var A_cat = tmp[10];
    var N_cat = tmp[13];

    var O_prb = tmp[2];
    var C_prb = tmp[5];
    var E_prb = tmp[8];
    var A_prb = tmp[11];
    var N_prb = tmp[14];

    var O_score = tmp[0];
    var C_score = tmp[3];
    var E_score = tmp[6];
    var A_score = tmp[9];
    var N_score = tmp[12];

    console.log(tmp)

    return (
         <div className="table-responsive">
           <table className="table table-borderless" style={{backgroundColor: '#39498B',color: 'white', boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1), 0 4px 14px 0 rgba(0,0,0,0.12)'}}>
             <thead>
               <tr>
                 <th scope="col">Trait</th>
                 <th scope="col">Probability</th>
                 <th scope="col">Category</th>
                 <th scope="col">Score</th>
               </tr>
             </thead>
             <tbody>
               <tr >
                 <td style={{fontFamily: 'sans-serif'}}>Openness</td>
                 <td style={{fontFamily: 'sans-serif'}}>{(Math.round(O_prb * 100 * 100)/100).toFixed(2)}%</td>
                 <td style={{fontFamily: 'sans-serif'}}>{O_cat}</td>
                 <td style={{fontFamily: 'sans-serif'}}>{(Math.round(O_score * 100)/100).toFixed(1)}</td>
               </tr>
               <tr >
                 <td style={{fontFamily: 'sans-serif'}}>Conscientiousness</td>
                 <td style={{fontFamily: 'sans-serif'}}>{(Math.round(C_prb * 100 * 100)/100).toFixed(2)}%</td>
                 <td style={{fontFamily: 'sans-serif'}}>{C_cat}</td>
                 <td style={{fontFamily: 'sans-serif'}}>{(Math.round(C_score * 100)/100).toFixed(1)}</td>
               </tr>
               <tr >
                 <td style={{fontFamily: 'sans-serif'}}>Extraversion</td>
                 <td style={{fontFamily: 'sans-serif'}}>{(Math.round(E_prb * 100 * 100)/100).toFixed(2)}%</td>
                 <td style={{fontFamily: 'sans-serif'}}>{E_cat}</td>
                 <td style={{fontFamily: 'sans-serif'}}>{(Math.round(E_score * 100)/100).toFixed(1)}</td>
               </tr>
               <tr >
                 <td style={{fontFamily: 'sans-serif'}}>Agreeableness</td>
                 <td style={{fontFamily: 'sans-serif'}}>{(Math.round(A_prb * 100 * 100)/100).toFixed(2)}%</td>
                 <td style={{fontFamily: 'sans-serif'}}>{A_cat}</td>
                 <td style={{fontFamily: 'sans-serif'}}>{(Math.round(A_score * 100)/100).toFixed(1)}</td>
               </tr>
               <tr >
                 <td style={{fontFamily: 'sans-serif'}}>Neuroticism</td>
                 <td style={{fontFamily: 'sans-serif'}}>{(Math.round(N_prb * 100 * 100)/100).toFixed(2)}%</td>
                 <td style={{fontFamily: 'sans-serif'}}>{N_cat}</td>
                 <td style={{fontFamily: 'sans-serif'}}>{(Math.round(N_score * 100)/100).toFixed(1)}</td>
               </tr>
             </tbody>
           </table>
         </div>
    )
  }
};
 
export default Table;