import styled from "styled-components";
import PostCard from "../molecules/PostCard";
import { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";
import UsersContext from "../../contexts/UsersContext";

const StyledMain = styled.main`
    min-height: calc(100vh - 100px - 75px - 4rem);
    padding: 2rem;
    > h1 {
        text-align: center;
        margin-top: 0;
    }
    > div{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
`;

const Post = () => {

    const {posts} = useContext(PostsContext);
    const { users } = useContext(UsersContext);
    console.log(users)

    return (
        <StyledMain>
            {
                posts.lengh === 0 ? 
                <h1>Page is loading.</h1> :
                <StyledMain>
                    <h1>Our all posts</h1>
                    <div>
                        {
                            posts.map(post =>{

                                const userById = users.find(user => user.id === post.userId)
                                console.log(userById)

                                return <PostCard 
                                    key={post.postId}
                                    post={post}
                                    userName={userById.userName}
                                />
                            }
                                
                            )
                        }
                    </div>
            </StyledMain>
            }
        </StyledMain>
     );
}
 
export default Post;