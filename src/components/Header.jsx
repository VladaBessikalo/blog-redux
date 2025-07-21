import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCount, getCount } from '../features/postSlice'

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  return (
    <header>
        <h1>Redux Blog</h1>
        <nav>
            <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="post">Add Post</Link></li>
                <li><Link to="user">Users</Link></li>

            </ul>
            <button onClick={() => dispatch(increaseCount())}>
              {count}
            </button>
        </nav>
    </header>
  )
}

export default Header