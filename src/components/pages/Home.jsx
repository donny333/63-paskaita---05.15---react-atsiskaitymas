import styled from "styled-components";

const StyledMain = styled.main`
    min-height: calc(100vh - 100px - 75px);
    > h1 {
        margin: 0;
    }
`;

const Home = () => {
    return ( 
        <StyledMain>
            <h1>Home</h1>
        </StyledMain>
     );
}
 
export default Home;