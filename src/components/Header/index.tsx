import * as Dialog  from "@radix-ui/react-dialog"
import Logo from "./../../assets/Logo.png"
import * as S from "./Header.styles"
import { NewTransactionModal } from "../NewTransactionsModal"

export const Header = () => {
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
                <img src={Logo} />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal/>
                </Dialog.Root>
            </S.HeaderContent>
        </S.HeaderContainer>
    )
}