/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import chartServiceData from '../services/chartDataService'
import {formatChartData} from '../utils/utils.js'
import ReactApexChart from 'react-apexcharts'
import { candleStickOptions } from '../constants.js'
import Button from './Button.jsx'


function TrackChart() {

const [charData,setCharData]=useState([])
const [symbolData, setSymbolData]=useState("IBM")

const symbolOptions = [
    {symbol:'IBM' , title:"IBM Stock"},
    {symbol:'TSCO.LON' , title:"London STOCK Exchange"},
    {symbol:'SHOP.TRT' , title:"Torronto Stock Exchange"},
    {symbol:'RELIANCE.BSE' , title:"Bombay Stock Exchange"}
];

function handleOptionClick(symbol){
    console.log(symbol)
    setSymbolData(symbol);
    console.log(symbolData)
}


  useEffect(
    ()=>{
        chartServiceData.fetchChartData(symbolData).then((data)=>(
                setCharData(data)
        ))
    },
    [setCharData,symbolData,setSymbolData]
  )

  const realData =  formatChartData(charData)
 


  
  return (
    <div className='p-4 '>
        <div className='flex'>
        <ReactApexChart
             className='min-w-[720px]'
                 series={
                  [
                  {
                     data: realData
                    }
                 ]
                     }
                 options={candleStickOptions}
                    type="candlestick"
                    />
                    <div className=' mt-32 ml-8 grid grid-cols-2 '>
                        {symbolOptions.map((sym,id)=>(
                            <Button onClick={()=>handleOptionClick(sym.symbol)}
                            className={`m-3 ${symbolData === sym.symbol ? 'bg-pink-400' : ''}`} 
                            key={id}>{sym.title}</Button>
                        ))}
                    </div>
        </div>
        
    </div>
   
  )
}

export default TrackChart