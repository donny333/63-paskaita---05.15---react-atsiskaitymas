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

const Home = () => {

    const {posts} = useContext(PostsContext);
    const { users } = useContext(UsersContext);

    return (
        <StyledMain>
            {
                posts.lengh === 0 ? 
                <h1>Page is loading.</h1> :
                <>
                    <h1>Whispers</h1>
                    <div>
                        {
                            posts.map(post =>{
                                const userById = users.find(user => user.id === post.userId)
                                return <PostCard 
                                    key={post.id}
                                    post={post}
                                    userName={userById.userName}
                                />
                            }
                                
                            )
                        }
                    </div>
                </>
            }
        </StyledMain>
     );
}
 
export default Home;