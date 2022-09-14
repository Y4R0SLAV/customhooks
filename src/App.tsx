import { Hover } from './components/Hover'
import { useInput } from './hooks/useInput'
import { List } from './components/InfinityScrollList'
import { UserPosts } from './components/UserPosts'
import { Todos } from './components/Todos';

function App() {
  const username = useInput("")
  const password = useInput("")

  return (
    <div>
      <h1>UseInput hook</h1>
      <input {...username} placeholder="Username"/>
      <input {...password} placeholder="Password"/>

      <button onClick={() => console.log(username.value + " " + password.value)}> Click </button>

      <h1>UseHover hook</h1>
      <Hover />

      <h1>UseScroll hook</h1>
      <List />

      <h1>UseDebouce hook (The best seems when id = 1 then id = 10)</h1>
      <UserPosts /> 

      <h1>UseRequest hook</h1>
      <Todos />
    </div>
  )
}

export default App
