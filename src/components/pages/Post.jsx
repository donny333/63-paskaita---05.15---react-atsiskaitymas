import styled from "styled-components";
import PostCard from "../molecules/PostCard";
import { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";

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

    console.log(posts)

    return (
        <StyledMain>
            {
                posts.lengh === 0 ? 
                <h1>Page is loading.</h1> :
                <StyledMain>
                    <h1>Our all posts</h1>
                    <div>
                        {
                            posts.map(post =>
                                <PostCard 
                                    key={post.postId}
                                    post={post}
                                />
                                
                            )
                        }
                    </div>
            </StyledMain>
            }
        </StyledMain>
     );
}
 
export default Post;