import { 
   LOADER_DISPLAY_ON, 
   LOADER_DISPLAY_OFF,
   ERROR_DISPLAY_ON,
   ERROR_DISPLAY_OFF
 } from "./types"

const initialState = {
   loading: false
}

export const appReducer=(state=initialState,actions)=>{

  console.log('LOADER_DISPLAY_ON',actions)


   switch(actions.type){
      case  LOADER_DISPLAY_ON :
      return {
         ...state ,
         loading: true
        
      }
      case  LOADER_DISPLAY_OFF :
      return {
         ...state ,
         loading: false
        
      }
      default:
         return state
   }
}