import styled from "styled-components";

const StyledMain = styled.main`
    min-height: calc(100vh - 100px - 75px);
    > h1 {
        margin: 0;
    }
`;

const Post = () => {
    return ( 
        <StyledMain>
            <h1>Post</h1>
        </StyledMain>
     );
}
 
export default Post;