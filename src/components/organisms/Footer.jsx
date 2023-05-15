import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledFooter = styled.footer`
    height: 73px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    border-top: 2px solid black;
    > div {
        text-align: center;
        > h4 {
            margin: 0;
            margin-bottom: 0.5rem;
            letter-spacing: 3px;
        }
        > div {
            display: flex;
            gap: 1rem;
        }
    }
`;

const Footer = () => {
    return ( 
        <StyledFooter>
            <p>© {new Date().getFullYear()} whisper.com from UAB Websmart</p>
            <div>
                <h4>Follow Us!</h4>
                <div>
                    <FacebookIcon />
                    <LinkedInIcon />
                    <YouTubeIcon />
                    <InstagramIcon />
                </div>
            </div>
        </StyledFooter>
     );
}
 
export default Footer;