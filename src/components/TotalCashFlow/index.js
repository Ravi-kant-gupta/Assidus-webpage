import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import "./index.css";

const TotalCashFlow=()=>{
  const data=useSelector(state=>state.dataList.totalCashFlow)

    const chartRef = useRef();

    useEffect(() => {
    const width = 500;
    const height = 200;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height);

    const chart = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const stack = d3.stack()
      .keys(Object.keys(data[0]).slice(1)) // Extract the keys from the data object

    const stackedData = stack(data);

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, innerWidth])
      .padding(0.7);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(stackedData, d => d3.max(d, segment => segment[1]))])
      .nice()
      .range([innerHeight, 0]);

    const colorScale = d3.scaleOrdinal()
      .domain(Object.keys(data[0]).slice(1))
      .range(['#04c90e', '#67f06e']);

    chart.selectAll('.stack')
      .data(stackedData)
      .enter()
      .append('g')
      .attr('class', 'stack')
      .attr('fill', d => colorScale(d.key))
      .selectAll('rect')
      .data(d => d)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.data.label))
      .attr('y', d => yScale(d[1]))
      .attr('height', d => yScale(d[0]) - yScale(d[1]))
      .attr('width', xScale.bandwidth());

    chart.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));
    chart.selectAll('.x-axis line').style('display', 'none');
  
    }, [data]);
  

    return(
<div className='total-cash-account-container'>

<div className="total-top-bar">
    <p>Total cash flow</p>
    <div className='in-out'>
    <div ><div className='in-color'></div><span>In</span></div>
    <div><div className='out-color'></div><span>Out</span></div>
   
    </div>
</div>
<hr/>
<svg ref={chartRef}>
    
</svg>
</div>
     )
}
export default TotalCashFlow