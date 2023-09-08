import { useMemo, useState } from 'react'
import './App.css'
import { type User } from './types'
import UsersList from './components/users-list'
import { SortBy } from './constants'
import { useUsers } from './hooks/useUsers'

function App() {
  const { isLoading, isError, users, refetch, fetchNextPage, hasNextPage } =
    useUsers()

  const [showColors, setShowColors] = useState<boolean>(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleDelete = (email: string) => {
    alert(`Delete user ${email}`)
    // const filteredUsers = users.filter(user => email !== user.email)
    // setUsers(filteredUsers)
  }

  const handleReset = async () => {
    await refetch()
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  const filteredUsers = useMemo(() => {
    if (filterCountry === null || filterCountry.length < 1) return users
    return users.filter(user =>
      user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
    )
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: user => user.location.country,
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [filteredUsers, sorting])

  return (
    <>
      <h1>Prueba técnica</h1>
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBlockEnd: '4rem'
        }}
      >
        <button onClick={toggleColors}>Colorear filas</button>
        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY
            ? 'No ordenar por país'
            : 'Ordenar por país'}
        </button>
        <button
          onClick={() => {
            void handleReset
          }}
        >
          Resetear estado
        </button>
        <input
          type='text'
          placeholder='Filtra por país'
          onChange={e => {
            setFilterCountry(e.target.value)
          }}
          style={{ paddingInlineStart: '.6rem' }}
        />
      </header>
      <main>
        {users.length > 0 && (
          <UsersList
            showColors={showColors}
            users={sortedUsers}
            onDeleteUser={handleDelete}
            onChangeSorting={handleChangeSort}
          />
        )}
        {isLoading && <p>Cargando...</p>}
        {!isLoading && isError && <p>Ha habido un error</p>}
        {!isLoading && !isError && users.length < 1 && (
          <p>No hay usuarios para mostrar</p>
        )}

        {!isLoading && !isError && hasNextPage === true && (
          <button
            onClick={() => {
              void fetchNextPage()
            }}
            style={{ marginBlockStart: '1rem' }}
          >
            Cargar más resultados
          </button>
        )}

        {!isLoading && !isError && hasNextPage === false && (
          <p>No hay más resultados</p>
        )}
      </main>
    </>
  )
}

export default App
