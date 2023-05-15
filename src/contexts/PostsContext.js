import { useEffect } from "react";
import { createContext } from "react";
import { useReducer } from "react";

const PostsContext = createContext();

const postsActionTypes = {
    load: 'load_all_posts',
    add: 'add_new_post'
}

const reducer = (state, action) =>{
    switch(action.type){
        case postsActionTypes.load:
            return action.data;
        case postsActionTypes.add:
            fetch("http://localhost:8000/posts", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(action.data)
            })
            return [...state, action.data]
        default:
            return state
    }    
}

const Posts = ({ children }) => {

    const [posts, setPosts] = useReducer(reducer, []);

    useEffect(()=>{
        fetch('http://localhost:8000/posts')
            .then(res => res.json())
            .then(data => setPosts({
                type: postsActionTypes.load,
                data: data
            }))
    },[])

    return ( 
        <PostsContext.Provider
            value={{
                posts,
                setPosts,
                postsActionTypes
            }}
        >
            { children }
        </PostsContext.Provider>
     );
}

export {Posts};
export default PostsContext;