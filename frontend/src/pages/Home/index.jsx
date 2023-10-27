import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { api } from '../../services/api'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  const [tags, seTags] = useState([])


  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')

      seTags(response.data)
    }

    fetchTags()

  }, [])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
      <li><ButtonText title={'Todos'} isActive /></li>
        {
          tags && tags.map((tag) => (
            <li key={tag.id} ><ButtonText  title={tag.name} isActive /></li>
          ))
        }
      </Menu>

      <Search>
        <Input placeholder={'Pesquisar pelo título'} icon={FiSearch} />
      </Search>

      <Content>
        <Section title={'Minhas notas'}>
          <Note data={{
            title: 'Introdução ao React',
            tags: [
              { id: 1, name: 'react' },
              { id: 2, name: 'node' },
            ]
          }} />
        </Section>
      </Content>

      <NewNote to={'/new'}>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
