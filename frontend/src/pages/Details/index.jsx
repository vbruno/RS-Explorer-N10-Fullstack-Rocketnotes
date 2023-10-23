import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

import { Container, Links, Content } from './styles'



export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title={'Excluir nota'} />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos ipsum quaerat molestiae laboriosam ullam aliquid. Velit similique, fugit incidunt ad sint eveniet, earum aliquam ex voluptatem tempore cum veniam?
          </p>

          <Section title={'Links úteis'}>
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>

            </Links>
          </Section>
          <Section title={'Marcadores'}>
            <Tag title={'express'} />
            <Tag title={'node'} />
          </Section>

          <Button title={'Voltar'} />
        </Content>
      </main>
    </Container>
  )
}
