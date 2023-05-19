import styled from "styled-components";
import * as Dialog  from "@radix-ui/react-dialog"
import * as Radio from "@radix-ui/react-radio-group";


export const Overlay = styled(Dialog.Overlay)(({}) => ({
    position: "fixed",
    width: "100vw",
    height: "100vh",
    inset: "0",
    background: "rgba(0, 0, 0, 0.75)",

}))

export const Content = styled(Dialog.Content)(({ theme }) => ({
    minWidth: "32rem",
    borderRadius: "6px",
    padding: "2.5rem 3rem",
    background: theme["gray-800"],

    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    "form": {
        marginTop:"2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",

        "input": {
            borderRadius: "6px",
            border: "0",
            background: theme["gray-900"],
            color: theme["gray-300"],
            padding: "1rem",

            "&::placeholder": {
                color: theme["gray-500"]
            }
        },

        "button[type='submit']": {
            height: "58px",
            border: "0",
            background: theme["green-500"],
            color: theme.white,
            fontWeight: "bold",
            padding: "0 1.25rem",
            borderRadius: "6px",
            marginTop: "1.5rem",
            cursor: "pointer",
            
            "&:disabled": {
                opacity: "0.7",
                cursor: "not-allowed",
            },
    
            "&:not(:disabled):hover": {
                background: theme["green-700"],
                transition: "background-color 0.2s",
            }
        }
    }
}))

export const CloseButton = styled(Dialog.Close)(({ theme }) => ({
    position: "absolute",
    border: "0",
    background: "transparent",
    top: "1.5rem",
    right: "1.5rem",
    cursor: "pointer",
    color: theme["gray-500"],
    lineHeight: "0",
}))

export const TransactionsType = styled(Radio.Root)(() => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
    marginTop: "0.5rem",
}))

interface ITransactionsTypeProps {
    variant: 'income' | 'outcome'
}

export const TransactionsTypeButton = styled(Radio.Item)<ITransactionsTypeProps>(({ theme, variant }) => ({
    background: theme["gray-700"],
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "6px",
    cursor: "pointer",
    border: "0",
    color: theme["gray-300"],

    "svg": {
        color: variant === 'income' ? theme["green-300"] : theme["red-300"]
    },

    "&[data-state='unchecked']:hover": {
        background: theme["gray-600"],
    },

    "&[data-state='checked']": {
        color: theme.white,
        background: variant === 'income' ? theme["green-500"] : theme["red-500"],

        "svg": {
            color: theme.white,        
        },
    }
}))