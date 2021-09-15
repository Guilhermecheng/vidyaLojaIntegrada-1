// contando itens do carrinho antes de deletar header
let carrinho = document.querySelectorAll(".carrinho-interno ul li");
let contagem = carrinho.length;
console.log(contagem)

let categorias = document.querySelectorAll(".menu .nivel-um li a strong");
let categoriasLinks = document.querySelectorAll(".menu .nivel-um li a");
console.log(categorias)
console.log(categoriasLinks)



// funcões que vão pro site
function removeElements(element) {
    var elements = element.length;

    for(var i = 0; i < elements; i++) {
        $(element[i]).remove();
    }
}

$(document).ready(function() {
    removeElements(
        // ['.barra-inicial','#cabecalho', '#barraTopo', '.esquerda', '.institucional' ]
        ['#delimitadorBarra' , '#barraTopo', '.barra-inicial', '.titulo-categoria', '#cabecalho > *', '.institucional > *' ]
    )
})


// função para seleção do menu superior active
var currentLocation = window.location.href;
var id = currentLocation.match(/([\d]+)/g);
if(id) {
    console.log(id)
    $(document).ready(function() {
        $(`.categoria-id-${id}`).addClass("active")
    })
}

// função para incluir o header novo no site
$(function() {
    $('#cabecalho').load('header.html');
});


// função para input da busca
function myFunction() {
    
    if($("#buscaInput").hasClass("inputActive")) {
        $("#buscaInput").removeClass("inputActive")
    } else {
        $("#buscaInput").addClass("inputActive")
    }
}

let formBuscar = document.getElementById('form-buscar');



// funçães que não vão pro site
$(window).resize(function() {
    if ($(window).width() < 767) {
        // removeElements(['#form-buscar'])
        console.log('oi')
        // $("#buscaInput").addClass("inputActive")
    }
   else {
        // if(!document.getElementById('form-buscar')) {
        //     $('.headerMenu').append(formBuscar)
        // }
        console.log('tchau')

   }
  });


// função para footer
$(function() {
    $('.institucional').load('institucional.html');
});


// sidenav functions
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// sidenav drop function
function dropDown() {
    document.getElementById('dropdownOnClick').classList.toggle('activeDrop');
}


// funções de teste para entender melhor como funciona o back
function count(list) {
    for(var i = 0; i < list.length; i++) {
        console.log(list[i].href)
    }
}

let elems = document.querySelectorAll("div[class^='SKU-Z9UWXNV85'], div[class*=' SKU-Z9UWXNV85]");
let classes = Array.from(elems).map(e => Array.from(e.classList)).reduce((arr, res) => {
    res = res.concat(arr);
    return res;
}, []).filter(cls => cls.startsWith('SKU-Z9UWXNV85'))


// let procura = document.querySelectorAll('.acoes-produto');
// procura.filter("div[class^='SKU-Z9UWXNV85'], div[class*='SKU-Z9UWXNV85']")

document.querySelectorAll("div[class^='SKU-Z9UWXNV85'], div[class*='SKU-Z9UWXNV85']")[0].attributes["data-produto-id"]

function getBuyButton(this) {
    let variacaoId = this.attributes["data-variacao-id"];
    let botoesLista = document.querySelectorAll("div[class^='SKU-Z9UWXNV85'], div[class*='SKU-Z9UWXNV85']");
    for(var i = 0; i < botoesLista.length; i++) {
        let variacaoDoItem = botoesLista[i].attributes["data-variacao-id"];
        if(variacaoDoItem === variacaoId) {
            $(botoesLista[i]).removeClass("hide");
        } else {
            $(botoesLista[i]).addClass("hide");
        }
    }
}

// example function to be used for buttons
// $('.atributo-item').click(e => alert($(e.currentTarget).data('val')));
// $('.atributo-item').click(e => alert($(e.currentTarget).attr('data-variacao-item')));
$('.atributo-item').click((e) => alert($(e.currentTarget).attr('data-variacao-id')));

// funcao para botao de comprar
let skuDoProduto = $('span [itemprop="sku"]')[0].innerText;
let skuProdConfere = $('span [itemprop="sku"]').length;

if(skuDoProduto && skuProdConfere === 1) {
    $('.atributo-item').click(function(e) {
        let variacaoIdItem = $(e.currentTarget).attr('data-variacao-id');
        let variacaoIdItemNum = Number(variacaoIdItem);
    
        let botoesLista = document.querySelectorAll(`div[class^='SKU-${skuDoProduto}'], div[class*='SKU-${skuDoProduto}']`);
        for(var i = 0; i < botoesLista.length; i++) {
            let variacaoDoItem = Number(botoesLista[i].attributes["data-variacao-id"].value);
            if(variacaoDoItem === variacaoIdItemNum) {
                $(botoesLista[i]).removeClass("hide");
            } else {
                $(botoesLista[i]).addClass("hide");
            }
        }
    });
}