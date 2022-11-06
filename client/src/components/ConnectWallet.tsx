import styled from 'styled-components';

const Container = styled.div`
    background-color: var(--bg);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    button{
        background-color: var(--col2);
        width: 200px;
        height: 50px;
        color: var(--font);
        border: 1px solid var(--peach);
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            filter: brightness(120%);
        }
    }
`

export default function ConnectWallet({connect}){
    return (
        <Container>
            <button onClick={connect}>CONNECT</button>
        </Container>
    )
}