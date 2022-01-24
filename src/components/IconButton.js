// Packages
import React from "react"
import styled from "styled-components"

// Components
import Icon from "./Icon"

// Styles
const Button = styled.button`
    --size: 48px;
    width: var(--size);
    height: var(--size);
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    position: absolute;
    top: calc(50% - var(--size) / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    z-index: 2;

    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }

    &:first-child {
        left: 48px;
    }

    &:last-child {
        right: 48px;
    }
`

function IconButton(props) {
    return (
        <Button {...props}>
            <Icon name={props.icon} size={32} />
        </Button>
    )
}

export default IconButton
