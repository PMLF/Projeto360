document.querySelector(".submit").addEventListener('click',
    function (e) {
        let rule = /([a-zA-Z0-9][a-zA-Z0-9_\-\.]*@[a-zA-Z0-9\.]+[\.][a-zA-Z0-9]+)|((([00]|[+])351)?[0-9]{9})/;
        if (rule.test(document.querySelector('.contact').value)
                && document.querySelector('.name').value != '') {
            alert("Recebemos o seu contacto!");
        }
        else {
            alert("Por favor preencha os campos corretamente antes de enviar o seu contacto.");
        }
    }
);