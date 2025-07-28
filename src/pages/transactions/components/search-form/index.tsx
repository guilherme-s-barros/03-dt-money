import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { useTransactions } from '../../../../hooks/use-transactions'
import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
	const fetchTransactions = useTransactions('fetchTransactions')

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(searchFormSchema),
	})

	async function handleSearchTransactions({ query }: SearchFormInputs) {
		await fetchTransactions({ query })
	}

	return (
		<SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
			<input
				type="search"
				placeholder="Busque por transações"
				{...register('query')}
			/>

			<button type="submit" disabled={isSubmitting}>
				<MagnifyingGlassIcon size={20} />
				Buscar
			</button>
		</SearchFormContainer>
	)
}
