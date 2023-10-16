import styled from "styled-components";

export const Container = styled.main`
    display:flex;
    min-height:100vh;

    @media screen and (max-width: 768px){
     flex-direction:column;
    }
`;

export const Sidebar = styled.aside`
    background-color:rgba(0, 0, 0, 0.8);
    min-width:8rem;
    max-height: 100vh;
    overflow-y:hidden;
`;

export const Main = styled.section`
    background-color: #191919;
    width: 100%;
    height: 100vh;
    overflow-y:hidden;
    padding: 40px;

    @media screen and (max-width: 768px){
     flex-direction:column;
    }
`;



