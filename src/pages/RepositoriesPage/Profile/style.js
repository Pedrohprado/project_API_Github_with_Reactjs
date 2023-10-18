import styled from "styled-components";

export const Container = styled.div`
    padding:1rem;
`;

export const Header = styled.div`
    display:flex;
    flex-direction: column;
    padding:1rem 0;
    
@media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
}
`;


export const Avatar = styled.img`
    align-self:center;
    border-radius:50%;
    width:60%;
    margin-bottom:1rem;

    @media screen and (max-width: 768px) {
        width:70px;
        height:70px;
        margin-right:1rem;
        margin-bottom:0;
    }
`;

export const Login = styled.h1`
    font-size:1.2rem;
`;

export const Name = styled.h2`
    font-size:1.10rem;
    font-weight: normal;
    margin:0px;

    
    @media screen and (max-width: 768px) {
       display:none;
    }
`;


export const Inner = styled.div`
    margin-top: 30px;

    @media screen and(max-width: 768px) {
        display:none;
    }
`;

export const Data = styled.p`
    display:flex;
    text-align:center;
    align-items: center;
    gap:8px;


    line-height: 1.1rem;
    font-size: 0.9rem;
`;