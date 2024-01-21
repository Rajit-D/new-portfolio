import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar flex justify-between w-full m-[10px] p-[30px]">
        <div className="logo">
            <p>portfolio.</p>
        </div>
        <div className="nav-items">
            <ul className="flex">
                <li className="mr-[30px]">ABOUT</li>
                <li className="mr-[30px]">SKILLS</li>
                <li className="mr-[30px]">PROJECTS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar