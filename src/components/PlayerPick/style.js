import styled from 'styled-components'

export const Container = styled.div`

    position: relative;
`

export const Pick = styled.div`

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    top: ${props => `${props.top}px`};
    left: ${props => `${props.left}px`};
    right: ${props => `${props.right}px`};
    bottom: ${props => `${props.bottom}px`};

    width: 120px;
    height: 120px;
    background-color: #fff;

    border-radius: 50%;
    border: solid 17px ${props => props.borderBG};

    cursor: pointer;
`