import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postSlice";
import { selectAllUsers } from "./users/usersSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSavePostClick = () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(addNewPost({title, body: content, userId})).unwrap();
        setTitle('');
        setContent('');
        setUserId('');
        navigate('/')
      } catch (err) {
        console.error('Failed to save post', err);
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }


  const usersOption = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">
          Author:
        </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOption}
        </select>

        <label htmlFor="postContent">
          Content:
        </label>
        
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClick} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
