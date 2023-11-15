import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  checkingAccountDataList: [8, 50, 13, 90, 12],
  accountDataList:[{'name':'scale','month':1194.58,'ytd':11418.58},
  {'name':'Advertising','month':6879.02,'ytd':9271.36},
  {'name':'Inventory','month':4692.01,'ytd':5864.58},
  {'name':'Entertainment','month':0,'ytd':0},
  {'name':'Product','month':6785.58,'ytd':2978.58}
  ],
  invoiceDataList:[ { label: 'Older', value: 10 },
  { label: 'Jan 01-08', value: 20 },
  { label: 'Jan 09-16', value: 15 },
  { label: 'Jan 17-24', value: 30 },
  { label: 'Future', value: 25 },],
  totalCashFlow:[
    { label: 'August', series1: 10, series2: 20 },
    { label: 'September', series1: 15, series2: 25 },
    { label: 'October', series1: 20, series2: 30 },
    { label: 'November', series1: 20, series2: 30 },
    { label: 'December', series1: 20, series2: 30 },
    { label: 'January', series1: 20, series2: 30 },
    ],
  text:"",
  showloader:false
}
export const counterSlice = createSlice({
  name: 'dataList',
  initialState,
  reducers: {
    checkingDropDown:(state,action)=>{
      console.log("tcfcgjkhljkhj")
      state.showloader=true
       state.checkingAccountDataList=action.payload
       state.showloader=false
      },

    changeData:(state)=>{
      state.showloader=true
      const result1=state.checkingAccountDataList.map((e)=> {return(e+=5)})
      state.checkingAccountDataList=result1
      const result2=state.accountDataList.map(({name,month,ytd})=> ({name,month:month+50,ytd:ytd+20}))
      state.accountDataList=result2
      const result3=state.invoiceDataList.map(({label,value})=> ({label,value:value+5}))
      state.invoiceDataList=result3
      const result4=state.totalCashFlow.map(({label,series1,series2})=> ({label,series1:series1+5,series2:series2+6}))
      state.totalCashFlow=result4
      state.showloader=false
    },
    changeSelector:(state,action)=>{
      state.text=action.payload
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { checkingDropDown,changeData,changeSelector} = counterSlice.actions

export default counterSlice.reducer