import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 320px;
    padding: 30px 20px;
    margin-top: 20vh;
    border-radius: 10px;
    background-color: #010409;
    border: 1px solid #30363d;

    hr{
        width: 100%;
    }

`

export const GithubIcon = styled.div`
    svg {
        font-size: 56px;
    }
    margin-bottom: 20px;
`

export const Title = styled.h2`
    font-size: 20px;
`