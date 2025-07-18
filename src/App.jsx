import "./App.css";
import PostsList from "./features/PostsList";
import AddPostForm from "./features/AddPostForm";
import SinglePostPage from "./features/SinglePostPage";
import EditPostForm from "./features/EditPostForm";
import Layout from "./components/Layout";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<PostsList/>} />
          <Route path="post">
            <Route index element={<AddPostForm/>} />
            <Route path=":postId" element={<SinglePostPage/>} />
            <Route path="edit/:postId" element={<EditPostForm/>}/>
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
