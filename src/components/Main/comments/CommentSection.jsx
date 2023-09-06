import { CommentList } from "./CommentList";
import {useState } from "react";

export function CommentSection({article_id}){
  const [isActive, setIsActive] = useState(false)

  const onClick = (e) => {

    setIsActive((current) => !current)
  }


  return (
        <div className="accordion">
            <div className="accordion-title" onClick={onClick}>
              <div>Comments</div>
              <div>{isActive ? '-' : '+'}</div>
            </div>
            <div>{isActive && <CommentList article_id={article_id}/>}</div>
        </div>
    );

}

