import styled from "styled-components";
import {MdOutlineNotificationImportant, MdNotificationImportant, MdNotInterested} from "react-icons/md";


const Container = styled.div`
    width: 100%;
    height: 5vh;
    color: var(--font);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .task{
        width: 80%;
        height: 5vh;
        line-height: 5vh;
        border-bottom: 0.5px solid var(--peach);
        padding-left: 1rem;
        padding-right: 1rem;
        overflow: hidden;
    }

    .btn{
        height: 5vh;
        width: 5vh;
        color: var(--peach);
        &:hover{
            filter: brightness(80%);
        }
    }

`

export default function Task(){
    return (
        <Container>
            <div className="task">Oj juz nie bajdurz tak, Maciuś.</div>
            <MdOutlineNotificationImportant className="btn"/>
            <MdNotInterested className="btn"/>
        </Container>
    )
}