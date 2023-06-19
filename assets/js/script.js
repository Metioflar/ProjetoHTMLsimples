$(document).ready(function(){
    $(window).scroll(function(){
        var scrolltop = $(this).scrollTop();
        var nav = $("#menu").position();
        var submenu = $('#submenu').position();
        if(scrolltop > nav.top && scrolltop > submenu.top){
                    $('#nav').css({"position":"fixed","top":"0","width":"100%","border-bottom":"1px solid #061013"});
                    $('.itens-submenu').css({"position":"fixed","top":"0"})
                }
        else{
                     $('#nav').css({"position":"static","top":"auto"})

        }
    });
    $('#submenu').click(function(){
        $('.itens-submenu').css({"transform":"translateX(0)"});
    });
    $('#fechar').click(function(){
        $('.itens-submenu').css({"transform":"translateX(-100%)"});
    })
});
const pessoas = []
const inputEmail= document.querySelector('#email');
const inputNome=document.querySelector('#nome');
const inputMensagem=document.querySelector('#mensagem');
const btnSubmit = document.querySelector('#btn-submit')
btnSubmit.addEventListener('click', e => {
    e.preventDefault()
    let email= inputEmail.value;
    let nome= inputNome.value;
    let mensagem= inputMensagem.value;
    let novaPessoa = {
        nome:nome,
        email:email,
        mensagem:mensagem
    }
    console.log(novaPessoa);
    pessoas.push(novaPessoa)
    console.log(pessoas)
})
// console.log(pessoas)
// function sendEmail() {
//     Email.send({
//       Host : "smtp.mailtrap.io",
//       To : 'sender@example.com',
//       From : "nicollesantos@edu.unifor.br",
//       Subject : "TESTANDO SE FUNCIONA",
//       Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//     }).then(
//       message => alert("mail sent successfully")
//     );
//   }

