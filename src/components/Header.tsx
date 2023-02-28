import React from "react";
import Button from "./Button";
import styled from "styled-components";

const Header = () => {

    return (
        <Wrapper>
            <Title>
                Collection of ships from the game World of Warships
            </Title>
            <Container>
                <SubTitle>
                    Here you can get detailed information about all the ships presented in the game
                </SubTitle>
                <Button text="Refresh" action={() => {window.location.reload()}}/>
            </Container>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    padding: 15px 25px;
    color: #505050;
    box-shadow: 2px 10px 5px -7px rgba(145,119,119,0.56);
`
const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`

const Container = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 15px;
`

const SubTitle = styled.h4`
    font-size: 1.2rem;
    max-width: 600px;
    padding-top: 15px;
`