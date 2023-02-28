import React from "react";
import styled, {keyframes} from "styled-components";

const Loading = () => {

    return (
        <Wrapper />
    )
}

export default Loading

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Wrapper = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #FF5F1F;
        border-color: #FF5F1F transparent #FF5F1F transparent;
        animation: ${rotate} 1.2s linear infinite;
    }
`