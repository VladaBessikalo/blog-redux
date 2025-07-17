import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header style={{ backgroundColor: "yellow",  padding: "1rem", width: "100%" }}>
        <h1>Redux Blog</h1>
        <nav>
            <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="post">Add Post</Link></li>

            </ul>
        </nav>
    </header>
  )
}

export default Header