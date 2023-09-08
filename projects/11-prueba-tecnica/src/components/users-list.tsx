import { SortBy } from '../constants'
import { type User } from '../types'

interface Props {
  users: User[]
  showColors: boolean
  onDeleteUser: (email: string) => void
  onChangeSorting: (sort: SortBy) => void
}

export default function UsersList({
  users,
  showColors,
  onDeleteUser,
  onChangeSorting
}: Props) {
  return (
    <>
      <header
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'start',
          paddingInlineStart: '2rem'
        }}
      >
        <p>
          Mostrando <span>{users.length}</span> usuarios
        </p>
      </header>
      <table width='100%'>
        <thead>
          <tr>
            <th>Foto</th>
            <th
              onClick={() => {
                onChangeSorting(SortBy.NAME)
              }}
            >
              Nombre
            </th>
            <th
              onClick={() => {
                onChangeSorting(SortBy.LAST)
              }}
            >
              Apellido
            </th>
            <th
              onClick={() => {
                onChangeSorting(SortBy.COUNTRY)
              }}
            >
              País
            </th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            const backgroundColor = index % 2 === 0 ? '#333' : '#555'
            const color = showColors ? backgroundColor : 'transparent'

            return (
              <tr
                key={user.login.uuid}
                style={{ backgroundColor: color }}
              >
                <td>
                  <img
                    src={user.picture.thumbnail}
                    alt={user.name.first}
                  />
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td>
                  <button
                    onClick={() => {
                      onDeleteUser(user.email)
                    }}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
