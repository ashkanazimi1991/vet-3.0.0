import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});






      class ColumnCatEnglish extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'Level',
              data: [10, 6.1, 4.0, 8.1, 4.0, 3.6, 3.2]
            }],
            options: {
              chart: {
                height: 350,
                type: 'bar',
              },
              plotOptions: {
                bar: {
                  borderRadius: 10,
                  dataLabels: {
                    position: 'top', // top, center, bottom
                  },
                }
              },
              dataLabels: {
                enabled: true,
                formatter: function (val) {
                  return val + "%";
                },
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["#304758"]
                }
              },
              
              xaxis: {
                categories: ["Dogs", "Cats", "Birds", "Fish", "Reptiles", "Rodents", "Insects"],
                position: 'top',
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                crosshairs: {
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5,
                    }
                  }
                },
                tooltip: {
                  enabled: true,
                }
              },
              yaxis: {
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              
              },
              title: {
                text: '',
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                  color: '#444'
                }
              }
            },
          
          
          };
        }

      

        render() {
          return (
            


      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>
    


          );
        }
      }



export default ColumnCatEnglish;