import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import Popup from 'reactjs-popup';
import "./index.css";

const Invoice=()=>{
    
  const data=useSelector(state=>state.dataList.invoiceDataList)

  
    const chartRef = useRef();


    useEffect(() => {
      // Define the dimensions of your chart
      const width = 500;
      const height = 200;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;
  
      // Create an SVG element to hold your chart
      const svg = d3
        .select(chartRef.current)
        .attr('width', width)
        .attr('height', height);
  
      // Create a group element for your chart content
      const chart = svg
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
      // Define scales for x and y axes
      const xScale = d3
        .scaleBand()
        .domain(data.map(d => d.label))
        .range([0, innerWidth])
        .padding(0.8);
  
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .nice()
        .range([innerHeight, 0]);
  
      // Create the bars
      chart
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.label))
        .attr('y', d => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', d => innerHeight - yScale(d.value))
        .attr('fill', '#04c90e')
        .attr('stroke','none');
  
      // Add x-axis
      chart
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(xScale));

        chart.selectAll('.x-axis line').style('display', 'none');
  
    }, [data]);

    return(
        <div className='invoice-container'>

        <div className="top-bar">
            <p>Invoices owed to you</p>
            <div>

  <Popup trigger={<button className="button"> New Sales Invoice </button>} modal>
    <div className='modal-pop-up'>
    <h1> Select File </h1>
    <input type='file'/>
    </div>
  </Popup>

            </div>
        </div>
        <hr/>
        <svg ref={chartRef}>
            
        </svg>
        </div>
    )
}
export default Invoice