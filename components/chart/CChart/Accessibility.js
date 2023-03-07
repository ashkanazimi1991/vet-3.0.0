import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});



class Accessibility extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [94],
      options: {
        chart: {
          height: 150,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: [''],
        fill:{
            colors:['#9CFF2E']
          }
      },
    
    
    };
  }



  render() {
    return (
      


<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series}
 type="radialBar" height={150} />
</div>



    );
  }
}




export default Accessibility