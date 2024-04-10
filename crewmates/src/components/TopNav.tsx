import { SetStateAction } from 'react';
import ShowSidebarButton from './ShowSidebarButton';

interface TopNavProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<SetStateAction<boolean>>;
}

const TopNav = ({ showSidebar, setShowSidebar }: TopNavProps) => {
  return (
    <div className="topnav">
      <ShowSidebarButton onClick={() => setShowSidebar(!showSidebar)} />
      <img 
        src="../../val-icon.webp"
        height={30}
      />
      <h2>Agent Creator</h2>
    </div>
  )
}

export default TopNav