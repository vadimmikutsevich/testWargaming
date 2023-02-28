import React from "react";
import styled from "styled-components";

const Button = ({text, action}: {text: string, action: () => void}) => {
    return (
        <Wrapper onClick={action}>
            <TextWrapper>
                <Text>
                    {text}
                </Text>
            </TextWrapper>
        </Wrapper>
    )
}

export default Button

const Wrapper = styled.div`
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 30%);
    display: inline-block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 1px;
    cursor: pointer;
`
const TextWrapper = styled.span`
    color: white;
    height: 30px;
    display: inline-block;
    margin-right: 30px;
    position: relative;
    text-decoration: none;
    background: url(https://wiki.wargaming.net/skins/globalwiki/css/../images/orange-button.png?2018-07-06T09:21:40Z) no-repeat 0 0;
`
const Text = styled.span`
    background: url(https://wiki.wargaming.net/skins/globalwiki/css/../images/orange-button.png?2018-07-06T09:21:40Z) no-repeat 100% 0;
    border: medium none;
    color: #ffefe6;
    display: inline-block;
    font: 15px "WarHeliosCondCBold",Arial,Helvetica,sans-serif;
    height: 30px;
    line-height: 30px;
    margin-right: -30px;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 60%);
    text-transform: uppercase;
    white-space: nowrap;
`
