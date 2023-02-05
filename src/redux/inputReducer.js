import { INPUT_TEXT } from "./types";

const initialState = {
   text: ''
}

export const inputReducer=(state=initialState,actions)=>{

  console.log('INPUTREDUCER',actions)


   switch(actions.type){
      case  INPUT_TEXT :
      return {
         ...state ,
         text: actions.text
        
      }
      default:
         return state
   }
}