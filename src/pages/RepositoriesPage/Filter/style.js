import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    grid-template-columns:auto;
    gap:0.2;
    margin:1rem auto;
    padding-right:2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: auto auto;
        gap:0.8rem;
        padding:0 1rem;
    }
`;

export const Selector = styled.button`
    display:flex;
    align-items:center;
    justify-content:space-between;

    background-color:#2d2d2d;

    width:80%;
    min-height:2rem;
    padding: 0 1rem;

    border:none;
    border-radius:5px;
    transition: background 0.3s, transform 0.3s;

    &:hover,
    &.selected {
        background: ${(props) => props.color || "#ecf0f1"};
        color: ${(props) => props.color ? "#ecf0f1" : "#101010"};
    }
`;