import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, increment, usersCount } from "../../app/userSlice";
const Home = () => {
    const count = useSelector((state) => state.user.count)
    const users = useSelector((state) => state.user.users)
    const dispatch = useDispatch()
 
    const handleClick = () => {
        dispatch(fetchUsers('/users'))
       
    }
    return ( 
        <div className="home-container">
            <h3>Click to get users from JSON Placeholder API</h3>
            <p>(Using react and redux-toolkit)</p>
            {
                users && users.map(user => <div key={user.id}>{user.name}</div>)
            }
            {count!=0 && <p>No of users: {count}</p>}
            <button onClick={handleClick}>Click Here</button>
        </div>
     );
}
 
export default Home;