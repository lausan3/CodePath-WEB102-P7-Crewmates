import BurgerMenu from "/burger-menu-svgrepo-com.svg"

interface props {
  onClick: () => void
}

const ShowSidebarButton = ({onClick}: props) => {
  return (
    <button
      className="sidebar-btn"
      onClick={onClick}
    >
      <img
        src={BurgerMenu}
        height={24}
        width={24}
      />
    </button>
  )
}

export default ShowSidebarButton