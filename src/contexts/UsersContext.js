import { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const UsersContext = createContext();

const usersActionTypes = {
    load: 'load_all_users',
    add: 'add_new_user'
}

const reducer = (state, action) => {
    switch(action.type){
        case usersActionTypes.load:
            return action.data
        default:
            return state
    }
}


const Users = ({ children }) => {

    const [users, setUsers] = useReducer(reducer, [])

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:8000/users')
        .then(res => res.json())
        .then(data => setUsers({
            type: usersActionTypes.load,
            data: data
        }))
    },[])

    return ( 
        <UsersContext.Provider
            value={{
                users,
                currentUser,
                setCurrentUser
            }}
        >
            { children }
        </UsersContext.Provider>
     );
}
 

export default UsersContext;
export {Users};