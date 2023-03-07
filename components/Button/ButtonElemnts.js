import styled from "styled-components";


export const Button = styled.div`
    border-radius: 50px;
    /* background: #f3ba2f; */
    width: 70%;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color:#fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border-color: #f3ba2f;
   border-width: 2px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    background-color: #232f3e;
    /* background: linear-gradient(05deg , rgb(243, 202, 20) , #f3ba2f); */
    animation: changeColor 4s linear infinite alternate;
    
    @keyframes changeColor {
        to{filter: hue-rotate(9deg); }
    }
    

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #09d3d5;
        color: #fff;
    }
`;