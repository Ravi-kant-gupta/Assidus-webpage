import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "../../reduxFolder/countersclice";

import { BiDollar, BiSearch, BiSolidDownArrow, BiSolidReport } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdAccountBalanceWallet, MdContacts, MdDashboard, MdNotifications } from 'react-icons/md';
import AccountWatch from "../AccountWatch/index";
import CheckingAccount from "../CheckingAccount/index";
import Invoice from "../Invoice/index";
import TotalCashFlow from "../TotalCashFlow/index";

import "./index.css";
import logo from "/home/ravi/Desktop/assiduus/Assidus webpage/src/components/Images/Assiduus_TM_Logo--1-.png";
import photo from "/home/ravi/Desktop/assiduus/Assidus webpage/src/components/Images/photo.png";

// import image from "/home/ravi/Desktop/assiduus/my-app/src/logo.svg";

const Home=()=>{

    const isLoading=useSelector(state=>state.dataList.showloader)
    const dispatch=useDispatch()
    const [selectedTab,setTab]=useState("dashboard")
    const randomData=()=>{
        dispatch(changeData())
    }

    const onSelectTab=(value)=>{
        setTab(value)
    }
    return(!isLoading &&
    <div className='bg-container'>

     <nav className='nav-bar'>
     <button className='left-nav-bar' onClick={()=>randomData()}>
     <img src={logo} className='logo'/>
     </button>
     <div className='right-nav-bar'>
            <div className="input-field">
                <span><BiSearch size="14px"/></span>
                <input type="text"  autoComplete="current-password"/>
            </div>
        <span><MdNotifications size="20px"/></span>
        <div className='avtar-image'>
        <Avatar alt="Remy Sharp" src={photo} sizes="29px" fontSize="10px"/>
        </div>
        <span><BiSolidDownArrow  fontSize="15px"/></span>
     </div>
     </nav>

    <div className='body'>
        <div className='left-body'>
            <ul>
                <li className={selectedTab==="dashboard"?'select-list':''} onClick={()=>onSelectTab('dashboard')}><MdDashboard className='icons'/>Dashboard</li>
                <li className={selectedTab==="account"?'select-list':''} onClick={()=>onSelectTab('account')}><MdAccountBalanceWallet className='icons'/>Accounts</li>
                <li className={selectedTab==="payroll"?'select-list':''} onClick={()=>onSelectTab('payroll')}><BiDollar className='icons'/>Payroll</li>
                <li className={selectedTab==="report"?'select-list':''} onClick={()=>onSelectTab('report')}><BiSolidReport className='icons'/>Report</li>
                <li className={selectedTab==="advisor"?'select-list':''} onClick={()=>onSelectTab('advisor')}><BsFillPersonFill className='icons'/>Advisor</li>
                <li className={selectedTab==="contact"?'select-list':''} onClick={()=>onSelectTab('contact')}><MdContacts className='icons'/>Contact</li>
            </ul>
        </div>
        <div className='right-body'>
            <div className='top-chart-container'>
                <div><CheckingAccount/></div>
                <div><Invoice/></div>
            </div>
            <div className='bottom-chart-container'>
                <div><TotalCashFlow/></div>
                <div><AccountWatch/></div>
            </div>
        </div>
    </div>
     </div>
     )
}
export default Home