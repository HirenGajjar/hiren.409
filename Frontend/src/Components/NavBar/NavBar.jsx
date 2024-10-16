import React from "react";

function NavBar() {
  return (
    <>
      <nav className="fixed bottom-[7%] right-[5%]  ">
        <ul className="">
          {["About", "Work", "Contact"].map((item, index) => (
            <li key={`link-${index}`}>
              <div className="text-right ">
                <a href={`#${item}`} className="pointer">
                  <p className="uppercase font-semibold"> {item}</p>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
