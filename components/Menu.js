import React from "react"
import Link from "next/Link"

const Menu = ({ categories }) => {
  const [open, setOpen] = React.useState(false)
  //   const handleopen = () => {
  //     open && setOpen(false)
  //   }
  //   React.useEffect(() => {
  //     window.addEventListener("click", handleopen)
  //     return () => {
  //       window.removeEventListener("click", handleopen)
  //     }
  //   })
  return (
    <div className="w-80 h-52">
      <div
        className="w-24 h-8 flex items-center justify-center cursor-pointer 
                rounded bg-none border border-white text-white  hover:border-none
                hover:bg-white hover:text-black transition-all
            
            "
        onClick={() => setOpen(!open)}
      >
        <p className=" flex items-center" onClick={() => setOpen(!open)}>
          <span className="ml-2"> Menu</span>
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </p>
      </div>
      {open && (
        <div
          className={`w-52 h-auto bg-yellow-500 mt-2 rounded opacity-${
            open ? 1 : 0
          }
                cursor-pointer flex items-center flex-col transition-all
        
            `}
        >
          {/* <div
            className="w-10/12 h-8 hover:bg-white  mt-1 mb-1 rounded flex items-center  "
            onClick={() => setOpen(!open)}
          >
            <p className="ml-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>{" "}
              <span className="ml-2">Home</span>
            </p>
          </div>
          <div
            className="w-10/12 h-8 hover:bg-white mt-1 mb-1 rounded flex items-center  "
            onClick={() => setOpen(!open)}
          >
            <p className="ml-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>{" "}
              <span className="ml-2">Contact Us </span>
            </p>
          </div> */}
          {categories.map(item => (
            <div
              key={item}
              className="w-10/12 h-8 hover:bg-white mt-1 mb-1 rounded flex items-center  "
              onClick={() => setOpen(!open)}
            >
              <Link href={`/Home?item=${item}`}>
                <p className="ml-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>{" "}
                  <span className="ml-2">{item} </span>
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu
