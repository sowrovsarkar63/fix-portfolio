import Script from "next/script";

export default function Navbar() {
  return (
    <>
      {/* navbar  */}
      <nav className="bg-base-100 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                {/* logo */}
                <a href="" className="flex items-center py-4 px-2">
                  {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                  <span className="font-black text-red-500 text-2xl">
                    Sowrov
                  </span>
                </a>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#hero"
                  className="py-4 px-2 text-red-500 hover:border-b-4 active:border-b-4 border-red-500 font-semibold"
                >
                  Home
                </a>
                <a
                  href="#portfolio"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-red-500 hover:border-b-4 active:border-b-4 border-red-500 transition duration-300"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-red-500 hover:border-b-4 active:border-b-4 border-red-500 transition duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            {/* <!-- <div className="hidden md:flex items-center space-x-3"> */}
            {/* <a
              href=""
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
              >Log In</a
            >
            <a
              href=""
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
              >Sign Up</a
            >
          </div> --> */}
            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-green-500"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-red-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-red-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-red-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-red-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* <script>
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
          menu.classList.toggle("hidden");
        });
      </script> */}
      </nav>
      <Script src="/js/navscript.js" />
    </>
  );
}
