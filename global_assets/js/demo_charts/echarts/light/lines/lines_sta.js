/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Stacked line example
 *
 *  Demo JS code for stacked line chart [light theme]
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsLinesStackedLight = function() {


    //
    // Setup module components
    //

    // Stacked line chart
    var _linesStackedLightExample = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define element
        var line_stacked_element = document.getElementById('line_stacked2');


        //
        // Charts configuration
        //

        if (line_stacked_element) {

            // Initialize chart
            var line_stacked = echarts.init(line_stacked_element);


            //
            // Chart config
            //

            // Options
            line_stacked.setOption({

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 20,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Caja Chica', 'Saldo Bancos', 'Saldo Tarjetas de Crédito', 'Otros'],
                    itemHeight: 8,
                    itemGap: 10
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 10],
                    textStyle: {
                        fontSize: 10,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: [
                        '1 Abr', '2 Abr', '3 Abr', '4 Abr', '5 Abr', '6 Abr', '7 Abr', '8 Abr', '9 Abr', '10 Abr', '11 Abr', '12 Abr', '13 Abr', '14 Abr', '15 Abr', '16 Abr', '17 Abr', '18 Abr', '19 Abr', '20 Abr', '21 Abr', '22 Abr', '23 Abr', '24 Abr', '25 Abr', '26 Abr', '27 Abr', '28 Abr', '29 Abr', '30 Abr'
                    ],
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Add series
                series: [
                    {
                        name: 'Caja Chica',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        symbolSize: 7,
                        data: [1210, 1312, 1101, 1134, 1290, 1230, 1210, 1300, 1458, 1987, 1528, 1787, 1600, 1800, 1800, 1890, 1120, 1230, 1250, 1000, 899, 1300, 2100, 3100, 3210, 3250, 3270, 3400, 3500, 3200 ],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    {
                        name: 'Saldo Bancos',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        symbolSize: 7,
                        data: [2200, 1820, 1910, 2340, 2900, 3300, 3100, 2200, 1820, 1910, 2340, 2900, 3300, 3100, 2200, 1820, 1910, 2340, 2900, 3300, 3100, 2200, 1820, 1910, 2340, 2900, 3300, 3100, 1910, 2340],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    {
                        name: 'Saldo Tarjetas de Crédito',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        symbolSize: 7,
                        data: [1500, 2320, 2010, 1540, 1900, 3300, 4100, 1500, 2320, 2010, 1540, 1900, 3300, 4700, 6500, 2320, 2010, 1540, 1900, 3890, 4100,1500, 2320, 5010, 3540, 1900, 3300, 4190,3500, 2520, 3010, 2540, 1900, 3300, 4100, ],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    {
                        name: 'Otros',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        symbolSize: 7,
                        data: [320, 332, 301, 334, 390, 330, 320, 320, 332, 405, 334, 390, 600, 320,320, 332, 301, 780, 390, 330, 320,320, 332, 1254, 334, 390, 330, 452,542, 521, 365, 334, 390, 654, 789,896, 987, 1000, 500, 390, 330, 320],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                   
                ]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            line_stacked_element && line_stacked.resize();
        };

        // On sidebar width change
        var sidebarToggle = document.querySelector('.sidebar-control');
        sidebarToggle && sidebarToggle.addEventListener('click', triggerChartResize);

        // On window resize
        var resizeCharts;
        window.addEventListener('resize', function() {
            clearTimeout(resizeCharts);
            resizeCharts = setTimeout(function () {
                triggerChartResize();
            }, 200);
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _linesStackedLightExample();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsLinesStackedLight.init();
});
