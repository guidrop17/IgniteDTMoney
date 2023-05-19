import { useContextSelector } from "use-context-selector"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import * as S from "./Transactions.styles"
import { SearchForm } from "./components/SearchForm"
import { dateFormatter, priceFormatter } from "../../utils/fotmatter"


export const Transactions = () => {
    const transactions  = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    })
    
    return (
        <>
            <Header/>
            <Summary/>
            <S.TransactionsContainer>
                <SearchForm/>
                <S.TransactionsTable>
                    <tbody>
                        {transactions.map(({type, category, createdAt, description, id, price}) => {
                            return(
                                    <tr key={id}>
                                        <td width="50%">{description}</td>
                                        <td>
                                            <S.PriceHighlight variant={type}>
                                                {type === "outcome" && " - "}
                                                {priceFormatter.format(price)}
                                            </S.PriceHighlight>
                                        </td>
                                        <td>{category}</td>
                                        <td>{dateFormatter.format(new Date(createdAt))}</td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </S.TransactionsTable>
            </S.TransactionsContainer>
        </>
    )
}