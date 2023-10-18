import styled from "styled-components";

export const Container = styled.main`
    display:flex;
    min-height:100vh;

    @media screen and (max-width: 768px){
     flex-direction:column;
    }
`;

export const Sidebar = styled.aside`
    background-color:#101010;
    min-width:12rem;
    max-height: 100vh;
    overflow-y:hidden;
`;

export const Main = styled.section`
    background-color: #303030;
    width: 100%;
    height: 100vh;
    overflow-y:hidden;
    padding: 40px;

    @media screen and (max-width: 768px){
     height: 100%;
    }

    @media screen and (max-width: 576px){
     padding: 40px 20px;
    }
`;



