import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder='Nome' icon={FiUser} />
        <Input placeholder='E-mail' icon={FiMail} />
        <Input placeholder='password' icon={FiLock} type="password" />

        <Button title={"Cadastrar"} />

        <Link to={'/'}>Voltar para o login</Link>
      </Form>


    </Container>
  )
}
