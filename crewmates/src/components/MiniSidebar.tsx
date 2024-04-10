import { Link } from 'react-router-dom'

const MiniSidebar = () => {
  return (
    <div className="mini-sidebar">
      <Link className='mini-sidebar-link' to='/'>🏠</Link>
      <Link className='mini-sidebar-link' to='/create'>🛠️</Link>
      <Link className='mini-sidebar-link' to='/list'>👀</Link>
    </div>
  )
}

export default MiniSidebar