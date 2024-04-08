import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Agent Creator</h1>
      <Link className='sidebar-link' to='/'>🏠 Home</Link>
      <Link className='sidebar-link' to='/create'>🛠️ Create a new Agent</Link>
      <Link className='sidebar-link' to='/list'>👀 See agents</Link>
    </div>
  )
}

export default Sidebar