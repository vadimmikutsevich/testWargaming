import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from "../hooks";
import { updateCurrentRenderList } from "../store/reducers/ShipsSlice";
import Loading from "./Loading";
import ListItem from "./ListItem";

const List = () => {
    const state = useAppSelector(state => state.shipSlice)
    const dispatch = useAppDispatch()

    const [isUpdateList, setUpdateList] = useState(false)

    useEffect(() => {
        if(isUpdateList) {
            setTimeout(() => {
                dispatch(updateCurrentRenderList())
                setUpdateList(false)
            }, 1000)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUpdateList])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e: any) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setUpdateList(true)
        }
    }

    return (
        <Wrapper>
            <ListContainer>
                {state.currentRenderList.map((item) => <ListItem key={item.name} item={item}/>)}
            </ListContainer>
            {isUpdateList && (
                <LoadingContainer>
                    <Loading/>
                </LoadingContainer>
            )}
        </Wrapper>
    )
}

export default List

const Wrapper = styled.div`
    padding-top: 35px;
    bacground-color: red;
`

const ListContainer = styled.ul`

`

const LoadingContainer = styled.div`
    position: relative;
    height: 100px;
`