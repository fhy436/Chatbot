import styled from "styled-components";
import img from "./background.jpg";

export const MainBackground = styled.div`
    background: url(${img});
    background-color: #eeeeee;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    padding-top: 45%;  //imageheight/imagewidth*width
`;
