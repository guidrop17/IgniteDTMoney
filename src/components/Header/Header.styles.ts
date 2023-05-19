import styled from "styled-components";

export const HeaderContainer = styled.header(({ theme }) => ({
    background: theme["gray-900"],
    padding: "2.5rem 0 7.5rem"
}))

export const HeaderContent = styled.div(() => ({
    width: "100%",  
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 1.5rem",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}))

export const NewTransactionButton = styled.button(({ theme }) => ({
    height: "50px",
    border: "0",
    background: theme["green-500"],
    color: theme.white,
    fontWeight: "bold",
    padding: "0 1.25rem",
    borderRadius: "6px",
    cursor: "pointer",
    
    "&:hover": {
        background: theme["green-700"],
        transition: "background-color 0.3s",
    }
}))