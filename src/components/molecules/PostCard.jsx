import styled from "styled-components";
import {v4 as generateId} from 'uuid'

const StyledDiv = styled.div`
    border: 1px solid black;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 3px 3px 3px 3px #dbdbdb;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div:first-child {
        display: flex;
        justify-content: space-between;
        > h3{
            margin: 0;
        }
        > p {
            margin: 0;
            font-size: 0.9rem;
        }
    }
    > p{
        font-size: 0.9rem;
    }
    > div:last-child{
        display: flex;
        gap: 1rem;
    }
    > div > button{
        background-color: white;
        border: none;
        border: 1px solid black;
        border-radius: .5rem;
        padding: .25rem 0.5rem;
    }
`;

const PostCard = ({post, userName}) => {
    return (  
        <StyledDiv>
            <div>
                <h3>{userName}</h3>
                <p>{post.date}</p>
            </div>
            <p>{post.postText}</p>
            <div>
                {
                    post.tags.map((tag) =>{
                        return <button key={generateId()}>{tag}</button>
                    })
                }
            </div>
        </StyledDiv>
    );
}
 
export default PostCard;