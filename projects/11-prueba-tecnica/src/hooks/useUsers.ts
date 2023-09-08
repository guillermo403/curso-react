import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUsers } from '../services/users'
import { type User } from '../types'

interface QueryProps {
  nextCursor?: number
  users: User[]
}

export const useUsers = () => {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQuery<QueryProps>(
      ['users'], // <- la key de la información o de la query
      fetchUsers,
      {
        getNextPageParam: lastPage => lastPage.nextCursor
      }
    )

  return {
    isLoading,
    isError,
    users: data?.pages?.flatMap(page => page.users) ?? [],
    refetch,
    fetchNextPage,
    hasNextPage
  }
}
