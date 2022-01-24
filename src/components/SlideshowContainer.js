// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import IconButton from "./IconButton"
import SlideshowItem from "./SlideshowItem"
import PaginationContainer from "./PaginationContainer"
import PaginationButton from "./PaginationButton"

// Styles
const Container = styled.div`
    width: 100%;
    height: 70vh;
    overflow: hidden;
    position: relative;
`

function SlideshowContainer(props) {
    const [active, setActive] = useState(0)

    const handleNext = () =>
        setActive(active !== props.items.length - 1 ? active + 1 : 0)
    const handlePrev = () =>
        setActive(active !== 0 ? active - 1 : props.items.length - 1)

    return (
        <>
            <Container>
                <IconButton icon="chevron-left" onClick={handlePrev} />

                {props.items.map((item, i) => (
                    <SlideshowItem
                        className={
                            active === i
                                ? "active"
                                : active > i
                                ? "previous"
                                : "next"
                        }
                        key={i}
                    >
                        <img src={item} alt="Item" />
                    </SlideshowItem>
                ))}

                <IconButton icon="chevron-right" onClick={handleNext} />
            </Container>

            <PaginationContainer>
                {props.items.map((_, i) => (
                    <PaginationButton
                        className={active === i && "active"}
                        onClick={() => setActive(i)}
                    />
                ))}
            </PaginationContainer>
        </>
    )
}

export default SlideshowContainer
