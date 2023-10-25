import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

import {useAuth} from '../../Hooks/auth'

export function Header() {

  const {signOut} = useAuth()

  function handleSignOut() {
    signOut()
  }

  return (
    <Container>
      <Profile to='/profile'>
        <img src="http://github.com/vbruno.png" alt="Foto do usuário" />

        <div>
          <span>
            Bem-vindo
          </span>
          <strong>
            Bruno S. Velho
          </strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut} >
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}
