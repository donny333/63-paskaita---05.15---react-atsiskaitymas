import styled from "styled-components";

const StyledLoginMain = styled.main`
    min-height: calc(100vh - 100px - 75px);
    display: flex;
    justify-content: center;
    align-items: center;

    > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        > div {
            width: 450px;
            display: grid;
            grid-template-columns: 150px 300px;
            grid-template-rows: 2rem;
            > label {
                border: 1px solid black;
                line-height: 2rem;
                border-top-left-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
                padding-left: 0.5rem;
            }
            > input {
                border: none;
                border: 1px solid black;
                border-left: 0;
                border-top-right-radius: 0.5rem;
                border-bottom-right-radius: 0.5rem;
            }
        }
        > button {
            width: 225px;
            border: 1px solid black;
            border-radius: 0.5rem;
            height: 2rem;
            background-color: white;
            font-size: 1.25rem;
        }
        > button:hover{
            background-color: black;
            color: white;
            cursor: pointer;
        }
    }
`;

const Login = () => {
    return ( 
        <StyledLoginMain>
            <form>
                <div>
                    <label htmlFor="email">Enter email: </label>
                    <input type="text" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Enter password: </label>
                    <input type="password" id="password" name="password" />
                </div>
                <button>Come in!</button>
            </form>
        </StyledLoginMain>
     );
}
 
export default Login;