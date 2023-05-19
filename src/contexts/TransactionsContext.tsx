import { ReactNode, useCallback, useEffect, useState} from "react"
import { api } from "../lib/axios"
import { createContext } from "use-context-selector"

export interface ITransaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

interface ICreateTransaction {
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
}

interface ITransactionsContextType {
    transactions: ITransaction[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransactions: (data: ICreateTransaction) => Promise<void>
}

interface ITransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionsContextType)

export const TransactionsProvider = ({children}: ITransactionsProviderProps) => {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const fetchTransactions = useCallback(
        async (query?: string) => {
            const response = await api.get("transactions", {
                params:{
                    _sort: 'createdAt',
                    _order: 'desc',
                    q: query,
                }
            })
    
            setTransactions(response.data)
        }, []
    )

    const createTransactions = useCallback(
        async (data: ICreateTransaction) => {

            const { description, category, price, type } = data

            const response = await api.post('transactions', {
                description: description,
                price: price,
                category: category,
                type: type,
                createdAt: new Date(),
            })
        
            setTransactions(state => [response.data, ...state])
        }, []
    )


    useEffect(() => {
        fetchTransactions()
    }, [])
    return(
        <TransactionsContext.Provider value={{
            transactions, 
            fetchTransactions,
            createTransactions
            }}>
            {children}
        </TransactionsContext.Provider>
    )
}