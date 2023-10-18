const imagesToCache = [
  "assents/home/logo-1-top.webp",
  "assents/home/sessao1/adotar.webp",
  "assents/home/sessao1/lar-temporario.webp",
  "assents/home/sessao1/doar-dindin.webp",
  "assents/home/sessao1/doar-produtos.webp",
  "assents/home/sessao1/ser-voluntario.webp",
  "assents/home/sessao3/animal-emergencia.webp",
  "assents/home/sessao4/animal-1.webp",
  "assents/home/sessao4/animal-2.webp",
  "assents/home/sessao4/animal-3.webp",
  "assents/home/sessao4/animal-4.webp",
  "assents/home/sessao4/animal-5.webp",
  "assents/home/sessao5/evento-img.webp",
  // Adicione mais URLs de imagem aqui
];

const cacheImages = () => {
  const imagePromises = imagesToCache.map((imageUrl) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageUrl;
      image.onload = resolve;
      image.onerror = reject;
    });
  });

  return Promise.all(imagePromises);
};

cacheImages()
  .then(() => {
    console.log('Imagens pré-carregadas com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao pré-carregar imagens:', error);
  });

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
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
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

//scrollnext
function Scrollnext(){
  let next = document.querySelector(".ul-recem-resgatados");
  next.scrollBy(320, 0)
};

//scrollprev
function Scrollprev(){
  let next = document.querySelector(".ul-recem-resgatados");
  next.scrollBy(-320, 0)
};

// bnt01
function copyToClickBoardPayPal() {
  const content = document.getElementById('paypalemail').textContent;
  const encodedContent = encodeURIComponent(content);

  navigator.clipboard.writeText(content).then(() => {
    alert("O Email foi copiado. Use Crtl+V para colar o conteúdo na area de transferência.")
  }).catch((error) => {
    console.error("Error copying text to clipboard: ", error);
  });
}


function copyToClickBoardCPF() {
  const content = document.getElementById('CopyCPF').textContent;
  const strippedContent = content.replace(/[^\d]/g, ''); // Remove all non-digit characters
  const encodedContent = encodeURIComponent(strippedContent);
  
  navigator.clipboard.writeText(encodedContent).then(() => {
    alert("O Numero de CPF foi copiado. Use Crtl+V para colar o conteúdo na area de transferência.")
  }).catch((error) => {
  console.error("Error copying text to clipboard: ", error);
  });
  }

  function copyToClickBoardCNPJ() {
    const content = document.getElementById('CopyCNPJ').textContent;
    const strippedContent = content.replace(/[^\d]/g, ''); // Remove all non-digit characters
    const encodedContent = encodeURIComponent(strippedContent);
    
    navigator.clipboard.writeText(encodedContent).then(() => {
    alert("O Numero de CNPJ foi copiado. Use Crtl+V para colar o conteúdo na area de transferência.")
    }).catch((error) => {
    console.error("Error copying text to clipboard: ", error);
    });
    }

    function copyToClickBoardAGI() {
      const content = document.getElementById('AGI').textContent;
      const strippedContent = content.replace(/[^\d]/g, ''); // Remove all non-digit characters
      const encodedContent = encodeURIComponent(strippedContent);
      
      navigator.clipboard.writeText(encodedContent).then(() => {
      alert("O Numero da Agência foi copiado. Use Crtl+V para colar o conteúdo na area de transferência.")
      }).catch((error) => {
      console.error("Error copying text to clipboard: ", error);
      });
      }

      function copyToClickBoardCCI() {
        const content = document.getElementById('CCI').textContent;
        const strippedContent = content.replace(/[^\d]/g, ''); // Remove all non-digit characters
        const encodedContent = encodeURIComponent(strippedContent);
        
        navigator.clipboard.writeText(encodedContent).then(() => {
        alert("O Numero da Conta foi copiado. Use Crtl+V para colar o conteúdo na area de transferência.")
        }).catch((error) => {
        console.error("Error copying text to clipboard: ", error);
        });
        }

        function copyToClickBoardAGX() {
          const content = document.getElementById('AGX').textContent;
          const strippedContent = content.replace(/[^\d]/g, ''); // Remove all non-digit characters
          const encodedContent = encodeURIComponent(strippedContent);
          
          navigator.clipboard.writeText(encodedContent).then(() => {
          alert("O Numero da Agência foi copiado. Use Crtl+V para colar o conteúdo na area de transferência.")
          }).catch((error) => {
          console.error("Error copying text to clipboard: ", error);
          });
          }

          function copyToClickBoardOPX() {
            const content = document.getElementById('OPX').textContent;
            const strippedContent = content.replace(/[^\d]/g, ''); // Remove all non-digit characters
            const encodedContent = encodeURIComponent(strippedContent);
            
            navigator.clipboard.writeText(encodedContent).then(() => {
            alert("O Numero de Operação foi copiado. Use Crtl+V para colar o conteúdo na area de transferência.")
            }).catch((error) => {
            console.error("Error copying text to clipboard: ", error);
            });
            }

            function copyToClickBoardCCX() {
              const content = document.getElementById('CCX').textContent;
              const strippedContent = content.replace(/[^\d]/g, ''); // Remove all non-digit characters
              const encodedContent = encodeURIComponent(strippedContent);
              
              navigator.clipboard.writeText(encodedContent).then(() => {
              alert("O Numero da Conta foi copiado. Use Crtl+V para colar o conteúdo na area de transferência.")
              }).catch((error) => {
              console.error("Error copying text to clipboard: ", error);
              });
              }