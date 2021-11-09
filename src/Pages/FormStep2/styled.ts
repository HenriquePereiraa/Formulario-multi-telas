import styled from "styled-components";

export const Container = styled.div`
    p{
        font-size: 13px;
        color:#b8b8d4;
    }
    
    h1{
        margin: 0%;
        padding: 0;
        font-size: 26px;
    }

    hr{
        height: 1px;
        border:0;
        background-color: #000099;
        margin:30px 0;
    }

    label{
        font-size: 14px;

        input {
            display: block;
            margin-top: 10px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border:2px solid #25CD89;
            border-radius: 10px;
            color:#fff;
            outline: none;
            font-size: 16px;
            background-color: #02044A;
        }
    }

    button{
        background-color: #25CD89;
        color:#fff;
        font-size: 15px;
        font-weight: bold;
        padding: 15px 20px;
        border:none;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding:20px 40px;
        color:#b8b8d4;
    }
`;