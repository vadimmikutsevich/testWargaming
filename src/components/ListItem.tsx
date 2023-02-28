import React from "react";
import styled from "styled-components";
import { Ship } from "../models";

const ListItem = ({item}: {item: Ship}) => {
    return (
        <Wrapper>
            <Content>
                <Level>
                    Level:  {item.level}
                </Level>
                <Name>
                    Model:  {item.name}
                </Name>
                <Nation>
                    Nation: {item.nation.charAt(0).toUpperCase() + item.nation.slice(1)}
                </Nation>
            </Content>
            <Img src={item.icons.large} alt={item.name}/>
        </Wrapper>
    )
}

export default ListItem

const Wrapper = styled.li`
    width: 100%;
    height: 300px;
    position: relative;
    margin-bottom: 10px;
    box-shadow: 8px 10px 5px -7px rgba(145,119,119,0.56);
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    opacity: 0.7;
    z-index: 8
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 9;
    top: 10%;
    left: 4%;
    font-weight: bold;
`

const Name = styled.span`
    margin-bottom: 5px;
    color: #505050;
`
const Nation = styled.span`
    margin-bottom: 5px;
    color: #505050;
`
const Level = styled.span`
    margin-bottom: 5px;
    color: #FF5F1F;
`

