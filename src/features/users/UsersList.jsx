import { useSelector } from 'react-redux'
import { selectAllUsers, selectUsersStatus, selectUsersError } from './usersSlice'
import { Link } from 'react-router-dom'

const UsersList = () => {
    const users = useSelector(selectAllUsers)
    const status = useSelector(selectUsersStatus);
    const error = useSelector(selectUsersError);

    let content;
    if (status === 'loading') {
        content = <p>Loading...</p>
    } else if (status === 'succeeded') {
        content = users.map(user => (
            <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
        ))
    } else if (status === 'failed') {
        content = <p>{error}</p>
    } else {
        content = <p>No users found</p>
    }

    return (
        <section>
            <h2>Users</h2>

            <ul>{content}</ul>
        </section>
    )
}

export default UsersList