import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});





class Temp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'رطوبت',
            data: [50, 40, 30, 70, 42, 80, 50 ]
          }, {
            name: 'دما',
            data: [30, 32, 28, 32, 27, 26, 28]
          }],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-10T00:00:00.000Z", "2018-09-11T01:30:00.000Z", "2018-09-12T02:30:00.000Z", "2018-09-13T03:30:00.000Z", "2018-09-14T04:30:00.000Z", "2018-09-15T05:30:00.000Z", "2018-09-16T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
        
        
        };
      }

    

      render() {
        return (
          


    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={250} />
</div>
  


        );
      }
    }


export default Temp;