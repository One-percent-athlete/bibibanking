"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DougnnutChart = ({ accounts }:DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1234,3456, 5677],
                backgroundColor : ['#0747b6', "#2265d8", "#2f91fa"]
            }
        ],
        labels: ["EAON", "RAKUTEN", "WISE"]
    }
    return <Doughnut 
            data={data}
            options={{
                cutout:"60%",
                plugins:{
                    legend: {
                        display: false
                    }
                }
            }}
            />
}

export default DougnnutChart