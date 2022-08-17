import React from 'react'
import logo from './logo.svg';
import './App.css';
import Main from './Main';

function App() {
  const [count, setCount] = React.useState(0)
  const [post, setPosts] = React.useState([])
  const [input, setInput ] = React.useState("")
  const [user, setUser] = React.useState({
    name: "Ayo",
    email: "",
    image: [""]
  })
  React.useEffect(() => {
    console.log('run')
    const interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)

    return (()=> {
      clearInterval(interval)
    })
  }, [])
  
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) =>  {
        alert("Posts are updating state")
        setPosts(data)
        console.log(data)
      })
  }, [])

  const changeUser = () => {
    setUser((prev) => ({...prev, name:input}))

  }
  return (
    <div className="App">
      <h1>{count}</h1> 
      {/* <p>{post.map((p) => {
        return(
          <div key={p.id}>
            {p.title}
          </div>
        )
      })}</p> */}

      <input type='text' onChange={e => setInput(e.target.value)}/>
      <button onClick={changeUser}>Change Username</button>

      <Main />
    
    <p>Username is {user?.name}</p>
    
    </div>
  );
}

export default App;
