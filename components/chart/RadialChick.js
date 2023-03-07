import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});





class RadialChick extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [70,60, 100, 20],
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
                    label: 'نژادهای گوشتی',
                    formatter: function (w) {
                      // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                      return 
                    }
                  }
                }
              }
            },
            labels: [ ' جوجه ریزی راس 308',' جوجه ریزی کاب 500',' جوجه ریزی کاب 500', ' جوجه ریزی کاب 500' ],
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

export default RadialChick;