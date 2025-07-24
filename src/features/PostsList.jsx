import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError} from "./postSlice";
import PostsExcerpt from "./PostsExcerpt";


const PostsList = () => {
    const orderedPostsIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if(postStatus === 'loading') {
      content = <p> Loading... </p> // or spinner component
    } else if (postStatus === 'succeeded') {
      content = orderedPostsIds.map(postId => <PostsExcerpt key={postId} postId={postId}/>)
    } else if (postStatus === 'failed') {
      content = <p>{error}</p>
    }
 
  return (
    <section>
        <h2>Posts</h2>
        {content}
    </section>
  )
}


export default PostsList