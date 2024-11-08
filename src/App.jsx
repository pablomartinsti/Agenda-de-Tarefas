import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Button, Container, Input, TodoList, ListItem, Trash, Check } from './styles'

function App() {

  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  function input(event) {

    setInputTask(event.target.value)
  }

  function button() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask }])
    }
  }
  function finalizarTarefa(id) {

    const newLisat = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newLisat)
  }

  function deletarTarefa(id) {

    const newLisat = list.filter(item => (
      item.id !== id
    ))

    setList(newLisat)
  }

  return (

    <Container>
      <TodoList>
        <Input onChange={input} placeholder="Digite a tarefa..." />
        <Button onClick={button}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li >{item.task}</li>
                  <Trash onClick={() => deletarTarefa(item.id)} />
                </ListItem>
              ))
            ) : (
              <h3 >Não há Tarefas para Fazer</h3>
            )
          }
        </ul>
      </TodoList>
    </Container>

  )
}

export default App
