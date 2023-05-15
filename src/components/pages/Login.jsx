import { useContext, useState } from "react";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { useNavigate } from "react-router-dom";

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
        > input {
            width: 225px;
            border: 1px solid black;
            border-radius: 0.5rem;
            height: 2rem;
            background-color: white;
            font-size: 1.25rem;
        }
        > input:hover{
            background-color: black;
            color: white;
            cursor: pointer;
        }
        > p {
            margin: 0;
            color: red;
        }
    }
`;

const Login = () => {

    const navigate = useNavigate();

    const [failedLogin, setFailedLogin] = useState(false);
    const {users, currentUser, setCurrentUser} = useContext(UsersContext);

    let values = {
        email: '',
        password:''
    }

    let usersShema = Yup.object({
        email: Yup.string()
            .required('Enter your user email.'),
        password: Yup.string()
            .required('Enter your password')
    });

    const formik = useFormik({
        initialValues:values,
        validationSchema: usersShema,
        onSubmit: (values) => {
            const validUser = users.find((user) => 
                values.email === user.email && values.password === user.password
            )
            if(validUser === undefined){
                setFailedLogin(!failedLogin)
            } else {
                setCurrentUser(validUser);
                navigate('/')
            }
        }
    });

    return ( 
        <StyledMain>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Enter email: </label>
                    <input type="text" 
                    id="email" name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                {
                    formik.touched.email && formik.errors.email &&
                    <p>{formik.errors.email}</p>
                }
                <div>
                    <label htmlFor="password">Enter password: </label>
                    <input type="password" 
                    id="password" name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                {
                    formik.touched.password && formik.errors.password &&
                    <p>{formik.errors.password}</p>
                }
                <input type="submit" value='Login'/>
                {
                    failedLogin &&
                    <p styled={{color:'red', margin:0}}>Invalid username or password!</p>
                }
            </form>
        </StyledMain>
     );
}
 
export default Login;