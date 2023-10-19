import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:1rem;
    gap:0.2rem;

    @media screen and (max-width: 768px){
        display:grid;
        grid-template-columns: auto auto;
        margin-bottom:20px;

        gap:0.5rem;
    }
`;

export const Selector = styled.button`
    display:flex;
    align-items:center;
    justify-content:space-between;

    background-color:#2d2d2d;
    color: ${(props) => props.color || "#ecf0f1"};

    cursor: pointer;

    width:80%;
    min-height:1.8rem;
    padding: 0 1rem;
    margin-bottom:0.3rem;

    border:none;
    border-radius:5px;
    transition: background 0.3s, transform 0.3s;

    &:hover,
    &.selected {
        background: ${(props) => props.color || "#ecf0f1"};
        color: ${(props) => props.color ? "#ecf0f1" : "#101010"};
        transform:translateX(5px) scale(1.02);

    }

    @media screen and (max-width: 768px){
        
        &:hover,
        &.selected {
            transform:translateX(0) scale(1.02);
        }
    }
`;

export const Cleaner = styled.button`
    background-color:transparent;
    color:#ecf0f1;

    border:none;

    width:80%;
    text-align:start;

    padding:1rem;

    cursor: pointer;
    transition: color 0.3s, transform 0.3s;

    &:hover,
    &.selected {
    color:#95a5a6;
    }

    @media screen and (max-width:768px){
        text-align:center;
        padding:0 1rem;

    }
`;