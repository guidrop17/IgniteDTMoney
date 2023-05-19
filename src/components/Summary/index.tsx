import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"
import * as S from "./Summary.styles"
import { priceFormatter } from "../../utils/fotmatter"
import { useSummary } from "../../hooks/useSummary"

export const Summary = () => {
    const summary = useSummary()
    return (
        <S.SummaryContainer>
            <S.SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>

                <strong>{priceFormatter.format(summary.income)}</strong>
            </S.SummaryCard>

            <S.SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </S.SummaryCard>

            <S.SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>{priceFormatter.format(summary.total)}</strong>
            </S.SummaryCard>
        </S.SummaryContainer>
    )
}