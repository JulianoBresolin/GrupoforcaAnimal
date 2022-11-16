class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".ul-menu-1",
    ".li-menu-1",
  );
  mobileNavbar.init();



  function ScrollLeft(){
    let left = document.querySelector(".ul-recem-resgatados");
    left.scrollBy(260,0)
  }

  function ScrollRight(){
    let right = document.querySelector(".ul-recem-resgatados");
    right.scrollBy(-260,0)
  }




  // bnt01
  function copyToClickBoard(){
    var content = document.getElementById('pix01').innerHTML;

    navigator.clipboard.writeText(content).then(() => {
    console.log("Text copied to clipboard...")})
 
}

  // bnt02
  function copyToClickBoard2(){
    var content = document.getElementById('pix02').innerHTML;

    navigator.clipboard.writeText(content).then(() => {
    console.log("Text copied to clipboard...")})
 
}

//http://localhost/GRUPO_FORCA_ANIMAL/GrupoforcaAnimal/