import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;

    padding:0 1rem 1rem 1rem;

    background-color: #151515;
    border-left: 3px solid ${(props) => props.color || "#bdc3c7"};
`;

export const Name = styled.h3`
    font-size: 1.0rem;
    text-align:start;
    font-weight:normal;
`;

export const Description = styled.p`
    font-size:0.8rem;
    text-align:justify;
    line-height:1.0rem;
    margin: 0 0 1.2rem 0;
`;

export const ContainerFoot = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    color: ${(props) => props.color || "#bdc3c7"};
    font-size:0.8rem;
`;

export const Lang = styled.span`
    color:inherit;
`;

export const Link = styled.a`
    color:inherit;
    font-size:0.8rem;
    font-weight:bold;
    text-transform:uppercase;
    text-decoration:none;
`;