// Packages
import styled from "styled-components"

// Styles
const SlideshowItem = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    transition: all 0.5s ease;

    &.previous {
        left: -100%;
    }

    &.active {
        left: 0;
    }

    &.next {
        left: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default SlideshowItem