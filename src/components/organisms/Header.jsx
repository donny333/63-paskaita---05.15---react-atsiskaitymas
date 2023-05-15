import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 98px;
    border-bottom: 2px solid black;
    > div {
        display: flex;
        align-items: center;
        >img {
            height: 98px;
        }
        > h1 {
            font-family: 'Dancing Script', cursive;
            color: #7e87d8;
            position: absolute;
            left: 6.5rem;
        }
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
    li > a {
        text-decoration: none;
        color: black;
    }
    .active {
        color: #7e87d8;
    }
`;

const Header = () => {

    const {currentUser} = useContext(UsersContext);

    return ( 
        <StyledHeader>
            <div>
                <img src="https://media.discordapp.net/attachments/1101880155149967370/1107562523965804554/donny333_a_logo_for_a_webpage_where_people_posts_their_short_mi_355c4856-f0a9-4b5a-acab-775615ba0104.png?width=1138&height=1138" alt="logo" />
                <h1>Whispers</h1>
            </div>
            {
                !currentUser ? 
                <ul>
                    <li><NavLink to={'/login'}>Login</NavLink></li>
                    <li><NavLink to={'/register'}>Register</NavLink></li>
                </ul>:
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/add-post'}>Add Post</NavLink></li>
                </ul>

            }
        </StyledHeader>
     );
}
 
export default Header;