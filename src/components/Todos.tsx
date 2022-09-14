import { useState, useEffect } from 'react'
import axios from 'axios'
import { ITodo } from './../../../ulbi/ulbi/src/types/types'
import { useRequest } from './../hooks/useRequest';


export const Todos = () => {
  const [todos, loading, error] = useRequest(fetchTodos)

  async function fetchTodos<ITodo>() {
    try {
      const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/posts?todos&_limit=20`)
      return response
    }
    catch (e) { alert(e); return }
  }

  if (loading) {
    return <div>Loading...</div> 
  } 


  if (todos) {
    return <div>
      {
      // @ts-ignore           because i don`t know how to typify this 
      todos.map(todo => 
        <div key={todo.id} style={{padding: 15, border: "1px solid teal"}}>
          {todo.id}. {todo.title}
        </div>
      )}
    </div>
  }
  
    return <div> Произошла ошибка </div> 

}