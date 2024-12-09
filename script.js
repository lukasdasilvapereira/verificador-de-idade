function verificar() {
    const data = new Date();
    const anoAtual = data.getFullYear();
    const fano = document.getElementById("anoNascimento");
    const res = document.getElementById("res");

    if (fano.value.length === 0 || fano.value > anoAtual) {
        alert("ERRO, escolha um ano válido!");
    } else {
        const fsex = document.getElementsByName("radsex");
        const idade = anoAtual - fano.value;
        let genero = "";
        const img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            genero = "Masculino";
            if (idade >= 0 && idade <= 11) {
                img.setAttribute("src", "/imagens/menino.jpg");
            } else if (idade >= 12 && idade <= 21) {
                img.setAttribute("src", "/imagens/jovem.jpg");
            } else if (idade >= 22 && idade <= 50) {
                img.setAttribute("src", "/imagens/adulto.jpg");
            } else {
                img.setAttribute("src", "/imagens/idoso.jpg");
            }
        } else if (fsex[1].checked) {
            genero = "Feminino";
            if (idade >= 0 && idade <= 11) {
                img.setAttribute("src", "/imagens/menina.jpg");
            } else if (idade >= 12 && idade <= 21) {
                img.setAttribute("src", "/imagens/mulherjovem.jpg");
            } else if (idade >= 22 && idade <= 50) {
                img.setAttribute("src", "/imagens/mulheradulta.jpg");
            } else {
                img.setAttribute("src", "/imagens/idosa.jpg");
            }
        }

        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`;
        res.appendChild(img);
    }
}
