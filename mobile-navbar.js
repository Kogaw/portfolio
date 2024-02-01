class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, linkMenu) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.linkMenu = document.querySelector(linkMenu)
    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`)
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
    this.animateLinks()
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick)
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
  ".link-menu"
)

mobileNavbar.init()


const navbar = document.getElementById("navbar")
const topoNav = navbar.offsetTop

window.onscroll = function(){
  fixarMenuNoTopo()
}

function fixarMenuNoTopo(){
  if(window.pageYOffset >= topoNav){
    navbar.classList.add("fixoNoTopo")
  } else {
    navbar.classList.remove("fixoNoTopo")
  }
}


