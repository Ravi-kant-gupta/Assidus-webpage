
import React from "react";
import { useSelector } from "react-redux";

import "./index.css";

const AccountWatch=()=>{
    const data=useSelector(state=>state.dataList.accountDataList)

    return(
        <div className='account-watch-container'>

        <div className="top-bar">
            <p>Account Watchlist</p>
           
        </div>
        <hr/>
        <table>
        <tr className="head-row">
            <td width="200px">Account</td>
            <td width="80px">This Month</td>
            <td width="80px" >YTD</td>
        </tr>
        {data.map((e)=>(
        <tr className="list-item">
            <td>{e.name}</td>
            <td>{e.month}</td>
            <td>{e.ytd}</td>
        </tr>

        ))}
            
        </table>
        </div>
     )
}
export default AccountWatch