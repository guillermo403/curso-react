import { Button, Card, TextInput, Title } from '@tremor/react'
import { useUserAction } from '../hooks/useUserActions'
import { toast } from 'sonner'

export function CreateNewUser() {
  const { addUser } = useUserAction()

  const handleSubmit = event => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    if (!name || !email || !github) {
      toast.error('Datos incorrectos')
      return
    }

    addUser({ name, email, github })
    form.reset()
    toast.success('Usuario creado')
  }

  return (
    <Card className='mt-4'>
      <Title>Create new user</Title>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-y-2'
      >
        <TextInput
          name='name'
          placeholder='Nombre'
        />
        <TextInput
          name='email'
          placeholder='Email'
        />
        <TextInput
          name='github'
          placeholder='Usuario de GitHub'
        />

        <div>
          <Button
            type='submit'
            className='mt-4'
          >
            Crear Usuario
          </Button>
        </div>
      </form>
    </Card>
  )
}
