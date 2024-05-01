
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY


export class ChartServiceData{

    async fetchChartData(symbol){
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`)
       
        
        return response.data ;
    }

}


const chartServiceData = new ChartServiceData();

export default chartServiceData;