import SingleComment from "./SingleComment";
import { useState } from "react";
import { commentCreate } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";

const Comments = (props) => {
  const [textComment, setTextComment] = useState("");
  const comments = useSelector((state) => {
    const { commentsReducer} = state;
    return commentsReducer.comments;
  });
  const dispatch = useDispatch();
  const handleImput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };
 console.log('COMMENTS>>>', comments)
  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleImput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length && comments.map(res=>{
       return  <SingleComment key={res.id} data={res}/>
      })}
      
    </div>
  );
};

export default Comments;
