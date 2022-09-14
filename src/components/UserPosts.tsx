import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDebounce } from './../hooks/useDebounce';

interface IPost {
  title: string
  id: number
  userId: number
}

export const UserPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [value, setValue] = useState<string>("")
  const debounceOnChange = useDebounce(fetchTodos, 500)

  async function fetchTodos(userId: string) {
    try {
      const response = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      setPosts(response.data)
    }

    catch (e) { alert(e) }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>){
    setValue(e.currentTarget.value)
    debounceOnChange(e.currentTarget.value)
  }

  return <div>
    <input type="text" value={value} onChange={onChange}/>

    {posts.map(post => 
      <div key={post.id} style={{padding: 15, border: "1px solid teal"}}>
        User id: {post.userId}. Post id: {post.id}. {post.title}
      </div>
    )}
  </div>
}