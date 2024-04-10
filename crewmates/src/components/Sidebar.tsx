import { useState } from 'react';
import { Link } from 'react-router-dom'
import ShowSidebarButton from './ShowSidebarButton';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div className="sidebar">
      <Link className='sidebar-link' to='/'>🏠 Home</Link>
      <Link className='sidebar-link' to='/create'>🛠️ Create a new Agent</Link>
      <Link className='sidebar-link' to='/list'>👀 See agents</Link>
    </div>
  )
}

export default Sidebar