import CommentItem from "./CommentItem";

export default function CommentList({sortedComments}) {
   
    return (
      <div className="comment-section">
        <ul className="comments-ul">
          {sortedComments.map((comment, index) => (
            <CommentItem key={index} comment={comment} />
          ))}
        </ul>
      </div>
    );
}