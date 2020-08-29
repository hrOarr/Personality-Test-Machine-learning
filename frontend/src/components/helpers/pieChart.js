import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const pieOptions = {
  title: "",
  pieHole: 0.5,
  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    }
  ],
  legend: {
    position: "right",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};
class PieChart extends React.Component {

  constructor(props){
    super(props);
  }

  state = {
    chartImageURI: ""
  };
  render() {

    const { result } = this.props;
    console.log(result)
    
    const tmp = []

    if( result!=null && Object.keys(result) ){

    Object.keys(result).map( (key,val) => (
         tmp.push(result[key])
      ))
    }

    const O_score = tmp[0];
    const C_score = tmp[1];
    const E_score = tmp[2];
    const A_score = tmp[3];
    const N_score = tmp[4];

    return (
        <Chart
          chartType="PieChart"
          data={[
            ["Traits", "Score"], 
            ["Openness", O_score],
            ["Conscientiousness", C_score],
            ["Extraversion", E_score],
            ["Agreeableness", A_score],
            ["Neuroticism", N_score]
            ]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
    );
  }
};

export default PieChart;