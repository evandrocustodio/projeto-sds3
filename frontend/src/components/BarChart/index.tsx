import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/request";

const BarChart = () => {

    type serialData = {
        name:string;
        data: string[];
     }

    type ChartData = {
        labels: { categories: string[]},
        series: serialData[],
    }
    const [chartData,setChartData] = useState<ChartData>({labels: { categories: []}, series: [{ name : '', data: []}]});

    
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-sellers`)
        .then( response => { 
             const data = response.data as SaleSuccess[];
             const myLabels = data.map(x => x.sellerName);
             const mySeries = data.map(x =>  round(100 * x.deals / x.visited, 3).toFixed(2));

            setChartData({labels: {categories: myLabels} , series: [{name: '% Sucess', data: mySeries}]});
        });
    },[]);    
    
    return (
        <div id="chart">
            <Chart options={{...options, xaxis: chartData.labels}} series={chartData.series} type="bar" height={240} />
        </div>)
}

export default BarChart;
