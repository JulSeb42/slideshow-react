// Packages
import styled from "styled-components"

// Styles
const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    button:not(:last-child) {
        margin-right: 8px;
    }
`

export default PaginationContainer
