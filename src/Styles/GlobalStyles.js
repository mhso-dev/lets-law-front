import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor}
        height:100vh;
        padding: 0;
        margin: 0;
    }
    input:focus{
        outline:none;
    }
`;

export default globalStyles;
