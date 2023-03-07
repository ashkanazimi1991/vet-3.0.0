import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});





class Radial extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [100,100, 100, 100],
          options: {
            chart: {
              height: 350,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize: '22px',
                  },
                  value: {
                    fontSize: '16px',
                  },
                  total: {
                    show: true,
                    label: 'نیازهای پرورش',
                    formatter: function (w) {
                      // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                      return 
                    }
                  }
                }
              }
            },
            labels: [ 'تجهیزات پرورشی',' جوجه های گوشتی', 'تغذیه ای و درمانی', 'دامپزشکی تخصصی'],
          },
        
        
        };
      }

    

      render() {
        return (
          


    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
</div>
  


        );
      }
  


  }

export default Radial;