import "./App.css";
import PostsList from "./features/PostsList";
import AddPostForm from "./features/AddPostForm";
import SinglePostPage from "./features/SinglePostPage";
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
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
