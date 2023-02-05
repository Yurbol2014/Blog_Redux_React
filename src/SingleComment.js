
import {useState,useEffect} from 'react'
import { commentUpdate,commentDelete } from "./redux/actions";
import { useDispatch,useSelector } from 'react-redux';



const SingleComment =({data}) =>{
   const [commentText, setCommentText] = useState('')
   const dispatch=useDispatch()
   const{text,id}= data
   useEffect(()=>{
      if(text){
         setCommentText(text)
      }
   },[text])
  
    const handleImput=(e)=>{
      setCommentText(e.target.value)
    }
     
     const handleUpdate=(e)=>{
      e.preventDefault()
      console.log('cubmit>>>', commentText)
      dispatch(commentUpdate(commentText,id))
     }

     const handleDelete=(e)=>{
      e.preventDefault()
      dispatch(commentDelete(id))

     
     }
 
   return(
   
       <form onSubmit={handleUpdate} className="comments-item">
         <div onClick={handleDelete} className="comments-item-delete">&times;</div>
          <input type="text" value={commentText} onChange={handleImput} />
          <input type="submit" hidden />
       </form>
       
    
   )
 }
 
 export default SingleComment;