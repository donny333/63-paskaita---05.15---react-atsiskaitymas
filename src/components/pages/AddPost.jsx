import styled from "styled-components";
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { useNavigate } from "react-router-dom";
import { v4 as generateId } from "uuid";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import PostsContext from "../../contexts/PostsContext";


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
        .min(5, 'Minimum length of post is 5 characters.')
        .max(200, "Maximum length of post is 200 characters")
        .required('Enter post text.'),
    tags: Yup.string()
        .required('Enter a tag.')
});



const AddPost = () => {

    const { currentUser } = useContext(UsersContext)
    const { setPosts, postsActionTypes } = useContext(PostsContext)
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: values,
        validationSchema: postShema,
        onSubmit:(values) => {
            let dateToday = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
            const tagArray = values.tags.split(',')
            const newPost = {
                ...values,
                userId: currentUser.id,
                id: generateId(),
                date: dateToday,
                tags: tagArray
            }
            console.log(newPost)
            setPosts({
                type: postsActionTypes.add,
                data: newPost
            })
            navigate('/')
        }
    });
    return ( 
        <StyledMain>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="postText">Enter post text: </label>
                    <textarea type="text" 
                    id="postText" name="postText"
                    value={formik.values.postText}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                {
                    formik.touched.postText && formik.errors.postText &&
                    <p>{formik.errors.postText}</p>
                }
                <div>
                    <label htmlFor="tags">Enter tags*:</label>
                    <input type="text" 
                    id="tags" name="tags"
                    value={formik.values.tags}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <span>*separate Tags by comma. Minimum one tag is required.</span>
                {
                    formik.touched.tags && formik.errors.tags &&
                    <p>{formik.errors.tags}</p>
                }
                <input type="submit" value='Post'/>
            </form>

        </StyledMain>
     );
}
 
export default AddPost;