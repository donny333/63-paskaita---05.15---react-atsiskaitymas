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
            return [...state, action.data]
        default:
            return state
    }    
}

const Posts = ({ children }) => {

    const [posts, setPosts] = useReducer(reducer, []);

    useEffect(()=>{
        fetch('http://localhost:8080/posts')
            .then(res => res.json())
            .then(data => setPosts({
                type: postsActionTypes.load,
                data: data
            }))
    },[])

    return ( 
        <PostsContext.Provider
            value={{
                posts
            }}
        >
            { children }
        </PostsContext.Provider>
     );
}

export {Posts};
export default PostsContext;