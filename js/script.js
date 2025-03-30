const btn_mobile = document.querySelector("#btn_menu_mobile");
const nav = document.querySelector("nav");

btn_mobile.addEventListener("click", function () {
    nav.classList.toggle("nav_ativo"); 

    if (btn_mobile.classList.contains("fa-bars")) {
        btn_mobile.classList.remove("fa-bars");
        btn_mobile.classList.add("fa-xmark");
    } else {
        btn_mobile.classList.remove("fa-xmark");
        btn_mobile.classList.add("fa-bars");
    }
});

// --------------------------------------------------------------

const cores = document.querySelectorAll(".cor");


cores.forEach(cor => {
    cor.addEventListener("click", () => {
        const datejustImg = document.querySelector("#rolex_cart");
        const datejustImg_1908 = document.querySelector("#rolex_cart_1908");
        if (cor.id === "verde_datejust") {
            datejustImg.src = "imgs/rolexs/datejust 36_verde.avif";
        } else if (cor.id === "roxo_datejust") {
            datejustImg.src = "imgs/rolexs/datejust 36_roxo.avif";
        } else if (cor.id === "azul_datejust") {
            datejustImg.src = "imgs/rolexs/datejust 36_azul.avif";
        }
        else if (cor.id === "marrom_1908") {
            datejustImg_1908.src = "imgs/rolexs/1908.avif";
        } else {
            datejustImg_1908.src = "imgs/rolexs/1908_preto.png";
        }
    });
});

