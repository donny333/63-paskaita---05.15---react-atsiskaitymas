import styled from "styled-components";

const StyledMain = styled.main`
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
        .genderPicker {
            display: grid;
            grid-template-columns: 50px 100px 50px 100px 50px 100px;
            grid-template-rows: 2rem;
            border: 1px solid black;
            border-radius: 0.5rem;
            font-size: 1rem;
            > label {
                border: none;
            }
            > input{
                height: 1rem;
                margin: 0;
                margin: auto 0;
                margin-left: 1rem;
                margin-right: auto;
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




const Register = () => {
    return (  
        <StyledMain>
                <form>
                    <div>
                        <label htmlFor="userName">Enter user name: </label>
                        <input type="text" id="userName" name="userName"/>
                    </div>
                    <div>
                        <label htmlFor="email">Enter email: </label>
                        <input type="text" id="email" name="email"/>
                    </div>
                    <div className="genderPicker">
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label htmlFor="other">Other</label>
                        <input type="radio" id="other" name="gender" value="other"/>
                    </div>
                    <div>
                        <label htmlFor="password">Enter password: </label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div>
                        <label htmlFor="repeatPassword">Repeat password: </label>
                        <input type="repeatPassword" id="repeatPassword" name="repeatPassword" />
                    </div>
                    <button>Join us!</button>
                </form>
        </StyledMain>
    );
}
 
export default Register;