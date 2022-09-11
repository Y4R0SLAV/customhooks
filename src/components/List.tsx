import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useScroll } from './../hooks/useScroll';

interface ITodo {
  title: string
  id: number
}

export const List = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [page, setPage] = useState<number>(1)
  const limit = 20
  const parentRef = useRef<HTMLDivElement>(null)
  const childRef = useRef<HTMLDivElement>(null)

  const scroll = useScroll(parentRef, childRef, () => fetchTodos(page, limit))

  async function fetchTodos(page: number, limit: number) {
    try {
      const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      setTodos([...todos, ...response.data])
      setPage(page + 1)
    }

    catch (e) { alert(e) }
  }


  return <div ref={parentRef} style={{height: "80vh", overflow: "auto"}}>
    {todos.map(todo => 
      <div key={todo.id} style={{padding: 15, border: "1px solid teal"}}>{todo.id}. {todo.title}</div>
    )}
    <div ref={childRef}></div>
  </div>
}