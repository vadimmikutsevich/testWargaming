import React, {useEffect} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import List from "../components/List";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { useAppSelector, useAppDispatch } from "../hooks";
import { fetchShips } from "../store/reducers/ShipsSlice";

const MainLayout = () => {
    const state = useAppSelector(state => state.shipSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchShips())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Wrapper>
            <Container>
                <Header />
                <List />
                <Pagination />
            </Container>

            {state.isLoading && <Loading/>}
        </Wrapper>
    )
}

export default MainLayout

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    background: url(https://wiki.wargaming.net/skins/globalwiki/css/../images/bg.jpg?2018-07-06T09:21:40Z) repeat;
`
const Container = styled.div`
    max-width: 75%;
`