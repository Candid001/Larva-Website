import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import Logo from "@assets/Vector (1).svg"
import Pic from "@assets/image 69.svg"
import ArrowD from "@assets/arrow-down-s-line.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigationList = [
    { id: 1, to: "/", name: "Home" },
    { id: 2, to: "/about", name: "About Us" },
    { id: 3, to: "/courses", name: "Courses", img: ArrowD },
    { id: 4, to: "/faq", name: "FAQ" },
    { id: 6, to: "/contact", name: "Contact Us" },
    { id: 5, to: "/join", name: "Join now" }
  ]

  const activeLink = "text-[#F39821]"
  const normalLink = "text-[#3D3D3D]"

  return (
    <header className="bg-[#F3F3F3] w-full h-[80px] md:h-[100px] flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 relative z-20">
      <img
        src={Pic}
        alt="background"
        className="absolute right-0 h-20 sm:h-20 md:h-24 lg:h-28 z-0 opacity-70"
      />

      <Link to="/" className="z-10">
        <img src={Logo} alt="Logo" className="w-24 sm:w-28 md:w-32 lg:w-36" />
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl focus:outline-none z-50 transition-all duration-300"
      >
        {isOpen ? "×" : "☰"}
      </button>

      <nav className="hidden md:flex items-center font-inter font-semibold text-base lg:text-lg text-[#3D3D3D] gap-5 lg:gap-10">
        {navigationList.map((item) => (
          <NavLink
            to={item.to}
            key={item.id}
            className={({ isActive }) =>
              item.id === 5
                ? "bg-gradient-to-r from-[#7A5DA8] to-[#F39821] text-white px-4 py-2 rounded-md"
                : isActive
                ? activeLink
                : normalLink
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {isOpen && (
        <nav className="fixed top-[80px] sm:top-[100px] left-0 w-full bg-[#F3F3F3] flex flex-col items-center py-5 font-inter font-semibold text-base text-[#3D3D3D] gap-5 md:hidden z-[9999] shadow-md">
          {navigationList.map((item) => (
            <NavLink
              to={item.to}
              key={item.id}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                item.id === 5
                  ? "bg-gradient-to-r from-[#7A5DA8] to-[#F39821] text-white px-4 py-2 rounded-md"
                  : isActive
                  ? activeLink
                  : normalLink
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header