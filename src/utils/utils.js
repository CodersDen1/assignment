export const formatChartData = (chartData)=>{

    const formattedData = []

    if(chartData['Time Series (5min)']){
        Object.entries(
            chartData['Time Series (5min)']
        ).map(
            ([key,value])=> {
                formattedData.push({
                    x: key ,
                    y:[
                        value['1. open'],
                        value['2. high'],
                        value['3. low'],
                        value['1. close']
                    ]
            })
            }
        )
    }
    return formattedData;
}