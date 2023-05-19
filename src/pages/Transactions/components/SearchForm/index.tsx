import { useForm } from "react-hook-form"
import { SearchFormContainer } from "./SearchForm.styles"
import { MagnifyingGlass } from "phosphor-react"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContextSelector } from "use-context-selector"
import { TransactionsContext } from "../../../../contexts/TransactionsContext"

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
    const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
        return context.fetchTransactions
    })
    
    const {
        register, 
        handleSubmit, 
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    const handleSearchTransactions  = async (data: SearchFormInputs) => {
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações"
                {...register("query")}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}