import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    cartArr :[],
    success : true
}
export const cartSlice = createSlice({
    name: 'addtocart',
    initialState,
    reducers:{
        addCardData:(state,  action )=>{
          let result=   state.cartArr.filter((items)=>{
              return items.id === action.payload.id
            })
            if(result.length == 0){
                state.cartArr.push(action.payload);
                state.success = true
            }
            else{
                state.success = false
            }
           
        },
       deletdata:(state,action)=>{
            state.cartArr.splice(action.payload,1)
       }
    }
})
export const {addCardData,deletdata}= cartSlice.actions
export default cartSlice.reducer