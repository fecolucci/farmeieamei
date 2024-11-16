const products = [
    {
        name: "Vestido Longo Patch Marias",
        price: "R$ 250,00",
        images: [
            "imagem/1A-vestido-patch-marias-v2.jpg",
            "imagem/1B-vestido-patch-marias.jpeg",
            "imagem/1C-vestido-patch-marias.jpeg"
        ]
    },
    {
        name: "Vestido de Malha Floresta De Cor",
        price: "R$ 230,00",
        images: [
            "imagem/2A-vestido-malha-floresta-de-cor.jpg",
            "imagem/2B-vestido-malha-floresta-de-cor.jpg",
            "imagem/2C-vestido-malha-floresta-de-cor.jpg",
            "imagem/2D-vestido-malha-floresta-de-cor.jpg",
            "imagem/2E-vestido-malha-floresta-de-cor.jpg",
            "imagem/3A-vestido-malha-floresta-de-cor.jpg",
            "imagem/3B-vestido-malha-floresta-de-cor.jpg",
            "imagem/3C-vestido-malha-floresta-de-cor.jpg",
            "imagem/3D-vestido-malha-floresta-de-cor.jpg"
        ]
    },
    {
        name: "Vestido Curto ML Mix de Inverno",
        price: "R$ 250,00",
        images: [
            "imagem/4A-vestido-mix-de-inverno.jpg",
            "imagem/4B-vestido-mix-de-inverno.jpg",
            "imagem/4C-vestido-mix-de-inverno.jpg",
            "imagem/4D-vestido-mix-de-inverno.jpg",
            "imagem/5A-vestido-mix-de-inverno.jpg",
            "imagem/5B-vestido-mix-de-inverno.jpg",
            "imagem/5C-vestido-mix-de-inverno.jpg",
            "imagem/5D-vestido-mix-de-inverno.jpg",
            "imagem/5E-vestido-mix-de-inverno.jpg"
        ]
    },
    {
        name: "Vestido Curto ML Na Selva",
        price: "R$ 250,00",
        images: [
            "imagem/6A-vestido-na-selva.jpg",
            "imagem/6B-vestido-na-selva.jpg",
            "imagem/6C-vestido-na-selva.jpg",
            "imagem/7A-vestido-na-selva.jpg",
            "imagem/7B-vestido-na-selva.jpg",
            "imagem/7C-vestido-na-selva.jpg",
            "imagem/7D-vestido-na-selva.jpg",
            "imagem/7E-vestido-na-selva.jpg"
        ]
    },
    {
        name: "Vestido Curto Carnaval das Águas",
        price: "R$ 250,00",
        images: [
            "imagem/9A-vestido-carnaval-das-aguas.jpg",
            "imagem/9B-vestido-carnaval-das-aguas.jpg",
            "imagem/10A-vestido-carnaval-das-aguas.jpg",
            "imagem/10B-vestido-carnaval-das-aguas.jpg",
            "imagem/10C-vestido-carnaval-das-aguas.jpg",
            "imagem/10D-vestido-carnaval-das-aguas.jpg",
            "imagem/10E-vestido-carnaval-das-aguas.jpg",
            "imagem/10F-vestido-carnaval-das-aguas.jpg"
        ]
    },
    {
        name: "Macacao Banho De Rio",
        price: "R$ 300,00",
        images: [
            "imagem/11A-macacao-banho-de-rio.jpg",
            "imagem/11B-macacao-banho-de-rio.jpg",
            "imagem/11C-macacao-banho-de-rio.jpg",
            "imagem/11D-macacao-banho-de-rio.jpg",
        ]
    },
    {
        name: "Macacao Terra Dos Abacaxis",
        price: "R$ 300,00",
        images: [
            "imagem/13A-macacao-terra-dos-abacaxis.jpg",
            "imagem/13B-macacao-terra-dos-abacaxis.jpg",
            "imagem/13C-macacao-terra-dos-abacaxis.jpg",
            "imagem/13D-macacao-terra-dos-abacaxis.jpg"
        ]
    },
    
    {
        name: "Top Double Lagostinha",
        price: "R$ 100,00",
        images: [
            "imagem/16A-top-um-ombro-so-saia-lagostinha.jpg",
            "imagem/16B-top-um-ombro-so-saia-lagostinha.jpg",
            "imagem/16C-top-um-ombro-so-saia-lagostinha.jpg",
            "imagem/16D-top-um-ombro-so-saia-lagostinha.jpg"
        ]
    },
    {
        name: "Saia Midi Transpassada Lagostinha",
        price: "R$ 220,00",
        images: [
            "imagem/17B-top-um-ombro-so-saia-lagostinha-v2.jpg",
            "imagem/17A-top-um-ombro-so-saia-lagostinha-v2.jpg",
            "imagem/17C-top-um-ombro-so-saia-lagostinha-v2.jpg",
            "imagem/17D-top-um-ombro-so-saia-lagostinha-v2.jpg"
        ]
    },
    {
        name: "Top Recortes Relicario",
        price: "R$ 90,00",
        images: [
            "imagem/20-A-top-relicario.jpg",
            "imagem/20-B-top-relicario.jpg",
            "imagem/20-C-top-relicario.jpg",
            "imagem/20-D-top-relicario.jpg",
            "imagem/20-E-top-relicario.jpg",
            "imagem/19A-top-saia-relicario.jpg",
            "imagem/19B-top-saia-relicario.jpg",
            "imagem/19C-top-saia-relicario.jpg"
        ]
    },
    {
        name: "Saia Midi Transpassada Relicario",
        price: "R$ 220,00",
        images: [
            "imagem/18A-saia-midi-transpasse-relicario.jpg",
            "imagem/18B-saia-midi-transpasse-relicario.jpg",
            "imagem/18C-saia-midi-transpasse-relicario.jpg",
            "imagem/18D-saia-midi-transpasse-relicario.jpg",
            "imagem/18E-saia-midi-transpasse-relicario.jpg",
            "imagem/19A-top-saia-relicario.jpg",
            "imagem/19B-top-saia-relicario.jpg",
            "imagem/19C-top-saia-relicario.jpg"
        ]
    },
    {
        name: "Top Babado Caju Ceu",
        price: "R$ 90,00",
        images: [
            "imagem/21A-top-babado-caju-ceu.jpg",
            "imagem/21B-top-babado-caju-ceu.jpg",
            "imagem/21C-top-babado-caju-ceu.jpg",
            "imagem/21D-top-babado-caju-ceu.jpg",
            "imagem/21E-top-babado-caju-ceu.jpg"
        ]
    },
    {
        name: "Top Babado Bordando Flor",
        price: "R$ 90,00",
        images: [
            "imagem/22A-top-babado-bordando-flor.jpg",
            "imagem/22B-top-babado-bordando-flor.jpg",
            "imagem/22C-top-babado-bordando-flor.jpg"
        ]
    },
    {
        name: "Top Double Coqueirinhos",
        price: "R$ 100,00",
        images: [
            "imagem/24A-top-dupla-face-coqueirinhos.jpg",
            "imagem/24B-top-dupla-face-coqueirinhos.jpg",
            "imagem/24C-top-dupla-face-coqueirinhos.jpg",
            "imagem/24D-top-dupla-face-coqueirinhos.jpg",
            "imagem/24E-top-dupla-face-coqueirinhos.jpg",
            "imagem/23-top-dupla-face-short-coqueirinhos.jpg"
        ]
    },
    {
        name: "Short Elástico Coqueirinhos",
        price: "R$ 120,00",
        images: [
            "imagem/32A-short-coqueirinhos.jpg",
            "imagem/32B-short-coqueirinhos.jpg",
            "imagem/32C-short-coqueirinhos.jpg",
            "imagem/32D-short-coqueirinhos.jpg",
            "imagem/32E-short-coqueirinhos.jpg",
            "imagem/32F-short-coqueirinhos.jpg",
            "imagem/32G-short-coqueirinhos.jpg",
            "imagem/32H-short-coqueirinhos.jpg",
            "imagem/32I-short-coqueirinhos.jpg"
        ]
    },
    {
        name: "Top Alça Canelado Mostarda",
        price: "R$ 80,00",
        images: [
            "imagem/25A-top-canelado-am.jpg",
            "imagem/25B-top-canelado-am.jpg"
  
        ]
    },
    {
        name: "Blusa Floral Artesanal Transpassada",
        price: "R$ 100,00",
        images: [
            "imagem/27-blusa-floral-artesanal-transpassada.jpg",
            "imagem/26A-blusa-floral-artesanal-transpassada.jpg",
            "imagem/26B-blusa-floral-artesanal-transpassada.jpg",
            "imagem/26C-blusa-floral-artesanal-transpassada.jpg",
            "imagem/26D-blusa-floral-artesanal-transpassada.jpg",
            "imagem/27-blusa-floral-artesanal-transpassada.jpg"

        ]
    },
    {
        name: "Cropped Rib Terracota",
        price: "R$ 90,00",
        images: [
            "imagem/28A-cropped-rib-terracota.jpg",
            "imagem/28B-cropped-rib-terracota.jpg",
            "imagem/28C-cropped-rib-terracota.jpg",
            "imagem/28D-cropped-rib-terracota.jpg",
            "imagem/28E-cropped-rib-terracota.jpg"

        ]
    },
    {
        name: "Top Babado Duplo Preto",
        price: "R$ 90,00",
        images: [
            "imagem/29A-top-babado-duplo-preto.jpg",
            "imagem/29B-top-babado-duplo-preto.jpg",
            "imagem/29C-top-babado-duplo-preto.jpg"

        ]
    },
    {
        name: "Body Frufru Floral Pintado",
        price: "R$ 120,00",
        images: [
            "imagem/30A-body-frufru-floral-pintado.jpg",
            "imagem/30B-body-frufru-floral-pintado.jpg",
            "imagem/30C-body-frufru-floral-pintado.jpg",
            "imagem/30D-body-frufru-floral-pintado.jpg",
            "imagem/31-body-frufru-floral-pintado.jpg"

        ]
    },
    {
        name: "Short Elástico Onça Primaveril",
        price: "R$ 120,00",
        images: [
            "imagem/37A-short-elastico-onca-primaveril.jpg",
            "imagem/37B-short-elastico-onca-primaveril.jpg",
            "imagem/37C-short-elastico-onca-primaveril.jpg",
            "imagem/37D-short-elastico-onca-primaveril.jpg",
            "imagem/37E-short-elastico-onca-primaveril.jpg"

        ]
    },
    {
        name: "Blusa Cropped Decote V Aquarela Tropical",
        price: "R$ 110,00",
        images: [
            "imagem/33A-blusa-cropped-decote-v-aquarela-tropical.jpg",
            "imagem/33B-blusa-cropped-decote-v-aquarela-tropical.jpg",
            "imagem/z1-conjunto1-aquarela-tropical.jpg",
            "imagem/z2-conjunto1-aquarela-tropical.jpg",
            "imagem/z3-conjunto1-aquarela-tropical.jpg",
            "imagem/zzz1-conjunto3-aquarela-tropical.jpg",
            "imagem/zzz2-conjunto3-aquarela-tropical.jpg"
        ]
    },
    {
        name: "Top Cropped Lastex Aquarela tropical",
        price: "R$ 100,00",
        images: [
            "imagem/34A-top-cropped-lastex-aquarela-tropical.jpg",
            "imagem/34B-top-cropped-lastex-aquarela-tropical.jpg",
            "imagem/zz1-conjunto2-aquarela-tropical.jpg",
            "imagem/zz2-conjunto2-aquarela-tropical.jpg",
            "imagem/zzzz1-conjunto4-aquarela-tropical.jpg",
            "imagem/zzzz2-conjunto4-aquarela-tropical.jpg"

        ]
    },
    {
        name: "Calça Pantalona Aquarela Tropical",
        price: "R$ 250,00",
        images: [
            "imagem/15A-calça-pantalona-aquarela-tropical.jpg",
            "imagem/15B-calça-pantalona-aquarela-tropical.jpg",
            "imagem/15C-calça-pantalona-aquarela-tropical.jpg",
            "imagem/14A-calça-pantalona-aquarela-tropical.jpg",
            "imagem/14B-calça-pantalona-aquarela-tropical.jpg",
            "imagem/14C-calça-pantalona-aquarela-tropical.jpg"
        ]
    },
    {
        name: "Calça Pantalona Moletom Aquarela tropical",
        price: "R$ 230,00",
        images: [
            "imagem/35A-calca-pantalona-moletom-aquarela-tropical.jpg",
            "imagem/35B-calca-pantalona-moletom-aquarela-tropical.jpg",
            "imagem/35C-calca-pantalona-moletom-aquarela-tropical.jpg",
            "imagem/zzz1-conjunto3-aquarela-tropical.jpg",
            "imagem/zzz2-conjunto3-aquarela-tropical.jpg",
            "imagem/zzzz1-conjunto4-aquarela-tropical.jpg",
            "imagem/zzzz2-conjunto4-aquarela-tropical.jpg"


        ]
    },
    {
        name: "Short Elástico Aquarela tropical",
        price: "R$ 120,00",
        images: [
            "imagem/36A-short-elastico-aquarela-tropical.jpg",
            "imagem/36B-short-elastico-aquarela-tropical.jpg",
            "imagem/36C-short-elastico-aquarela-tropical.jpg",
            "imagem/36D-short-elastico-aquarela-tropical.jpg",
            "imagem/36E-short-elastico-aquarela-tropical.jpg",
            "imagem/z1-conjunto1-aquarela-tropical.jpg"

        ]
    }

];

const productsContainer = document.getElementById("products");
const modal = document.getElementById("modal");
const carousel = document.getElementById("carousel");
const closeModal = document.getElementById("close");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentProductIndex = 0;
let currentImageIndex = 0;

products.forEach((product, index) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p class="preco">${product.price}</p>
    `;
    productElement.onclick = () => {
        currentProductIndex = index;
        currentImageIndex = 0;
        showImages();
        modal.style.display = "block";
    };
    productsContainer.appendChild(productElement);
});

closeModal.onclick = () => {
    modal.style.display = "none";
};

prev.onclick = () => {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : products[currentProductIndex].images.length - 1;
    showImages();
};

next.onclick = () => {
    currentImageIndex = (currentImageIndex < products[currentProductIndex].images.length - 1) ? currentImageIndex + 1 : 0;
    showImages();
};

function showImages() {
    carousel.innerHTML = `
        <img src="${products[currentProductIndex].images[currentImageIndex]}" alt="${products[currentProductIndex].name}">
    `;
}

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

