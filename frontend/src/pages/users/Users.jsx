import styles from './style.module.css';
import {getUsers} from "../../utils/api.js";
import {useEffect, useState} from "react";
import User from "./components/user/User.jsx";
import cn from "classnames";
import {useUserContext} from "../../contexts/useUserContext.jsx";

function Users() {
    const [users, setUsers] = useState([]);
    const {setIsUserLoggedIn} = useUserContext();
    useEffect(() => {
        async function fetchUsers() {
            const response = await getUsers();
            if (response.success) {
                setUsers(response.data);  // Передаём именно данные, а не саму функцию
                console.log("Users:", response.data);
            } else {
                console.error("Error fetching users:", response.message);
            }
        }

        fetchUsers();
    },[] );
    const logout = ()=>{
        setIsUserLoggedIn(false)
    }


    return <div className={styles.users}>
        <header>
            <button className="btn btn-primary" style={{width: '200px'}} onClick={logout}>Logout</button>

        </header>
        <table className={cn("table", "table-bordered", "border-primary", `${styles.usersTable}`)}>
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
            </tr>
            </thead>
            <tbody>
            {users.map(userObj => (
                <User key={userObj.id} name={userObj.name} email={userObj.email} />
            ))}
             </tbody>
        </table>
    </div>;
}

export default Users;