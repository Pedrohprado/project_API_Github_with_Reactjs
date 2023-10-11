import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    min-height:100vh;
    padding:0 2rem;
`;

export const LogoGithub = styled.img `
    width:130px;
`;

export const Title = styled.h1 `
    font-size: 1.8rem;
`;

export const Form = styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    gap:1rem;

    width:100%;
    max-width:590px;
    height:100px;
`;

export const Input = styled.input `
    outline:none;
    border:none;
    padding: 7px 10px;
    border-radius: 0.2rem;

    width:90%;
    height:34px;
    font-size:16px;

    background-color:rgba(0, 0, 0, 0.8);
    color:#f1f1f1;

    &::placeholder {
        color:#7f8c8d;
    }
`;

export const Button = styled.button `
    display:flex;
    align-items:center;
    justify-content:center;

    cursor:pointer;
    border:none;
    border-radius:0.2rem;
    
    background-color:#7f8c8d7c;
    height:34px;
    padding: 8px;
    transition: background 0.3s;


    &:hover {
        background: #7f8c8d;
    }
`;