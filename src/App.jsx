import "./App.css";
import PostsList from "./features/PostsList";
import AddPostForm from "./features/AddPostForm";

function App() {
  return (
    <main className="App">
      <PostsList/>
      <AddPostForm/>
    </main>
  );
}

export default App;
