import styled from "styled-components";
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
            > label {
                border: 1px solid black;
                line-height: 2rem;
                border-top-left-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
                padding-left: 0.5rem;
                margin: 0;
            }
            > input {
                border: none;
                border: 1px solid black;
                border-left: 0;
                border-top-right-radius: 0.5rem;
                border-bottom-right-radius: 0.5rem;
            }
            > textarea {
                border: none;
                border: 1px solid black;
                border-left: 0;
                border-top-right-radius: 0.5rem;
                border-bottom-right-radius: 0.5rem;
                height: 4rem;
            }
        }
        > div:first-of-type {
            > label {
                height: 4.25rem;
                line-height: 4.2rem;
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
        > span {
            margin: 0;
        }
    }
`;


const values = {
    postText: '',
    tags: '',
}

let postShema = Yup.object({
    postText: Yup.string()
        .required('Enter post text.'),
    password: Yup.string()
        .required('Enter a tag.')
});


const AddPost = () => {
    return ( 
        <StyledMain>
            <form >
            {/* onSubmit={formik.handleSubmit} */}
                <div>
                    <label htmlFor="postText">Enter post text: </label>
                    <textarea type="text" 
                    id="postText" name="postText"
                    // value={formik.values.postText}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    />
                </div>
                {
                    // formik.touched.email && formik.errors.email &&
                    // <p>{formik.errors.email}</p>
                }
                <div>
                    <label htmlFor="tags">Enter tags*:</label>
                    <input type="text" 
                    id="tags" name="tags"
                    // value={formik.values.tags}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    />
                </div>
                <span>*separate Tags by comma</span>
                {
                    // formik.touched.password && formik.errors.password &&
                    // <p>{formik.errors.password}</p>
                }
                <input type="submit" value='Post'/>
                {
                    // failedLogin &&
                    // <p styled={{color:'red', margin:0}}>Invalid username or password!</p>
                }
            </form>

        </StyledMain>
     );
}
 
export default AddPost;