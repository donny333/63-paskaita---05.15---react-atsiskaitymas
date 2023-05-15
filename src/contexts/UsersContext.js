import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const UsersContext = createContext();

const usersActionTypes = {
    load: 'load_all_users'
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

    useEffect(()=>{
        fetch('http://localhost:8080/users')
        .then(res => res.json())
        .then(data => setUsers({
            type: usersActionTypes.load,
            data: data
        }))
    },[])

    return ( 
        <UsersContext.Provider
            value={{
                users
            }}
        >
            { children }
        </UsersContext.Provider>
     );
}
 

export default UsersContext;
export {Users};