import Comment from "./Comment";
function CommentList(props) {
    return (
        <div>
            <h1>한 마디씩 남겨주세요!</h1>
            <Comment name={"금붕어"} comment={"뻐끔"} />
            <Comment name={"거북이"} comment={"거북거북이"} />
        </div>
    );
}

export default CommentList;