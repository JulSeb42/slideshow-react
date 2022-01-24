// Packages
import styled from "styled-components"

// Styles
const PaginationButton = styled.button`
    --size: ${props => `${props.size || 16}px`};
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: none;
    background-color: gray;
    transition: all 0.2s ease;

    &:hover,
    &.active {
        background-color: black;
    }
`

export default PaginationButton
