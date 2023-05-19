import { useForm, Controller } from "react-hook-form" 
import * as S from "./NewTransactionsModal.styles"
import * as Dialog  from "@radix-ui/react-dialog"
import { X, ArrowCircleUp, ArrowCircleDown } from "phosphor-react"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContextSelector } from "use-context-selector"
import { TransactionsContext } from "../../contexts/TransactionsContext"


const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(["income","outcome"]),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
    const createTransactions = useContextSelector(TransactionsContext, (context) => {
        return context.createTransactions
    })
    const { 
        control, 
        register, 
        handleSubmit, 
        formState: {isSubmitting},
        reset
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: "income"
        },

    })

    const handleCreateNewTransaction  = async (data: NewTransactionFormInputs) => {
        const { description, category, price, type } = data

        await createTransactions({
            description,
            price,
            category,
            type,
        })
    
        reset()
    }

    return (
        <>
            <Dialog.Portal>
                <S.Overlay />
                <S.Content>
                    <Dialog.Title>Nova transação</Dialog.Title>
                    <S.CloseButton>
                        <X size={24}/>
                    </S.CloseButton>
                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input 
                            type="text" 
                            placeholder="Descrição"
                            {...register('description')}
                        />
                        <input 
                            type="number" 
                            placeholder="Preço"
                            {...register('price', {valueAsNumber: true})}
                        />
                        <input 
                            type="text" 
                            placeholder="Categoria"
                            {...register('category')}
                        />
                        <Controller 
                            control={control} 
                            name="type" 
                            render={({ field }) => {
                                return(
                                    <S.TransactionsType 
                                        onValueChange={field.onChange} 
                                        value={field.value}
                                    >
                                        <S.TransactionsTypeButton variant="income" value="income">
                                            <ArrowCircleUp size={24}/>
                                            Entrada
                                        </S.TransactionsTypeButton>
                                        <S.TransactionsTypeButton variant="outcome" value="outcome">
                                            <ArrowCircleDown size={24}/>
                                            Saida
                                        </S.TransactionsTypeButton>
                                    </S.TransactionsType>
                                )
                            }}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Cadastrar
                        </button>
                    </form>
                </S.Content>
            </Dialog.Portal>
        </>
    )
}