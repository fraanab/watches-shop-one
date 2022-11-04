import { getUserInfo } from "../localStorage";

{/* <input class="header-btn-checkbox" type="checkbox" id="menu-btn"> */}
const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return `
    <div class="header-btn">Menu</div>
    <div class="header">

      <div class="brand">
      <a href="/#/">My STORE</a>
      </div>
      <div class="nav-links">
      ${
        name
          ? `<a href="/#/profile">${name}</a>`
          : `<a href="/#/signin">Sign-In</a>`
      }
        
        <a href="/#/cart">Cart</a>
        ${isAdmin ? `<a href="/#/dashboard">Dashboard</a>` : ""}
      </div>
    
      <div class="close">x</div>
    </div>
    `;
  },
  after_render: () => {
    const headerbtn = document.querySelector(".header-btn");
    const headernav = document.querySelector(".header");
    const close = document.querySelector(".close");
    
    headerbtn.addEventListener("click", () => {
      if (headernav.style.left === "-100vw") {
        headernav.style.left = "-10vw";
        headerbtn.style.left = "90vw"
      } else {
        headernav.style.left = "-100vw";
      }
    });
    
    close.addEventListener('click', () => {
      headernav.style.left = "-100vw"
      headerbtn.style.left = "0"
    })
  },
};
export default Header;
