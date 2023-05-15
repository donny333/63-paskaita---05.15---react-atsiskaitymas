import styled from "styled-components";
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { useContext, useState } from "react";
import { v4 as generateId } from "uuid";
import UsersContext from "../../contexts/UsersContext";
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

const values = {
    userName: '',
    email:'',
    gender:'',
    password:'',
    repeatPassword:''
}

let userShema = Yup.object({
    userName: Yup.string()
        .min(3, "Minimum allowable characters are 3")
        .max(15, "Maximum allowable characters are 15.")
        .required('Enter your user name.'),
    email: Yup.string()
        .email('This input must be a valid email.')
        .required('Enter your user email.'),
    password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .trim()
        .required('Input must be filled'),
    repeatPassword: Yup.mixed()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Input must be filled'),
});

const Register = () => {
    const navigate = useNavigate()
    const [genderSelected, setGenderSelected] = useState(true);
    const {setUsers, usersActionTypes, setCurrentUser} = useContext(UsersContext);

    const formik = useFormik({
        initialValues:values,
        validationSchema: userShema,
        onSubmit: (values) => {
            if(values.gender){
                console.log(values)
                const newUser = {
                    ...values,
                    id:generateId()
                }
                delete newUser.repeatPassword
                setUsers({
                    type: usersActionTypes.add,
                    data: newUser
                });
                setGenderSelected(true);
                setCurrentUser(newUser);
                navigate('/')

            } else{
                setGenderSelected(false)
            }
        }
    })
    return (  
        <StyledMain>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="userName">Enter user name: </label>
                        <input type="text" 
                        id="userName" name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                    </div>
                        {
                        formik.touched.userName && formik.errors.userName &&
                        <p>{formik.errors.userName}</p>
                        }
                    <div>
                        <label htmlFor="email">Enter email: </label>
                        <input type="email" 
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
                    <div className="genderPicker">
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male"
                        onClick={formik.handleChange}
                        />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" name="gender" value="female"
                        onClick={formik.handleChange}
                        />
                        <label htmlFor="other">Other</label>
                        <input type="radio" id="other" name="gender" value="other"
                        onClick={formik.handleChange}
                        />
                    </div>

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

                    <div>
                        <label htmlFor="repeatPassword">Repeat password: </label>
                        <input type="password" 
                        id="repeatPassword" name="repeatPassword" 
                        value={formik.values.repeatPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                    </div>
                        {
                        formik.touched.repeatPassword && formik.errors.repeatPassword &&
                        <p>{formik.errors.repeatPassword}</p>
                        }
                    <input type="submit" value="Join us!"/>
                    {
                        !genderSelected && <p>Please select gender.</p>
                    }
                </form>
        </StyledMain>
    );
}
 
export default Register;