
import { COMMENT_CRETE,COMMENT_UPDATE, COMMENT_DELETE } from "./types";

const initialState = {
   comments: []
}

export const commentsReducer=(state=initialState,actions)=>{




   switch(actions.type){
      case  COMMENT_CRETE :
      return {
         ...state ,
         comments: [...state.comments,actions.data]
        
      }
     

         case  COMMENT_UPDATE :

         const{data}= actions;
         const{comments}=state;
         const itemIndex= comments.findIndex(res=>res.id===data.id)
         const nextComments =[...comments.slice(0,itemIndex),
            data,...comments.slice(itemIndex+1)]
            return {
               ...state ,
               comments: nextComments
              
            }
           


         case  COMMENT_DELETE :

        return(()=>{
         const{id}= actions;
         const{comments}=state;
         const itemIndex= comments.findIndex(res=>res.id===id)
         const nextComments =[...comments.slice(0,itemIndex),
            ...comments.slice(itemIndex+1)]
            return {
               ...state ,
               comments: nextComments
              
            }
        })()
            default:
               return state


   }
}

