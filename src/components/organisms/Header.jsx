import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 98px;
    border-bottom: 2px solid black;
    >img {
        height: 98px;
    }
    > ul {
        display: flex;
        gap: 1rem;
        > li {
            list-style-type: none;
            font-size: 1.3rem;
            font-weight: bold;
        }
    }
`;

const Header = () => {
    return ( 
        <StyledHeader>
            <img src="https://media.discordapp.net/attachments/1101880155149967370/1107562523965804554/donny333_a_logo_for_a_webpage_where_people_posts_their_short_mi_355c4856-f0a9-4b5a-acab-775615ba0104.png?width=1138&height=1138" alt="logo" />
            <ul>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </StyledHeader>
     );
}
 
export default Header;