import * as d3 from 'd3';
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelector, checkingDropDown } from "../../reduxFolder/countersclice";

import "./index.css";

const CheckingAccount=()=>{
  const data=useSelector(state=>state.dataList.checkingAccountDataList)
  const text=useSelector(state=>state.dataList.text)

  const dispatch=useDispatch()
    const chartRef=useRef()
    const dropDown=(event)=>{
      dispatch(changeSelector(event.target.value))
      const result=data.map((e)=> e+5)
      dispatch(checkingDropDown(result))
    }
    useEffect(()=>{
    const width = 400;
    const height = 180;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .attr('width', width)
      .attr('height', height);

    const chart = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, innerWidth]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).nice().range([innerHeight, 0]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveMonotoneX);

    chart
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line)
      .attr('stroke-width', "3px")
      .style('fill', 'none')
      .style('stroke', '#04c90e');

    chart
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));

    chart.selectAll('.x-axis path').style('display', 'none');
        },[data])
        console.log(data)
    return(
    <div className='checking-account-container'>

        <div className="top-bar">
            <p>Checking Account</p>
            <div>
            <select name="post" id="post" className="selection-item">
                <option value="Manage">Manage</option>
            </select>
            <select  id="month" className="selection-item" value={text} onChange={(event)=>dropDown(event)}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            </div>
        </div>
        <hr/>
        <svg ref={chartRef}>

        </svg>
    </div>
     )
}
export default CheckingAccount