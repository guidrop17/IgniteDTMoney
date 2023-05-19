import styled from "styled-components";

export const TransactionsContainer = styled.main(() => ({
    width: "100%",  
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 1.5rem",
}))

export const TransactionsTable = styled.table(({ theme }) => ({
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 0.5rem",
    marginTop: "1.5rem",

    "td": {
        padding: "1.25rem 2rem",
        background: theme["gray-700"],
    
        "&:first-child": {
            borderTopLeftRadius: "6px",
            borderBottomLeftRadius: "6px",
        },
        "&:last-child": {
            borderTopRightRadius: "6px",
            borderBottomRightRadius: "6px",
        }
    }
}))

interface IPriceHighlightProps {
    variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<IPriceHighlightProps>(({ variant, theme }) => ({
    color: `${variant === 'income' ? theme["green-300"] : theme["red-300"]}`
}))