// Passo 3: Seleciona o formulário pelo ID
const formulario = document.getElementById("formValidacao");

// Passo 4: Adiciona o escutador de evento "submit"
formulario.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;
    const erroElemento = document.getElementById("erro");

    // Limpa erro anterior
    erroElemento.textContent = "";

    // Passo 5: Validações exigidas por regras condicionais
    if (nome.trim() === "") {
        event.preventDefault(); // Passo 6: Impede o envio
        erroElemento.textContent = "Erro: O nome não pode estar vazio!";
        erroElemento.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        event.preventDefault(); // Passo 6: Impede o envio
        erroElemento.textContent = "Erro: O e-mail deve conter '@'!";
        erroElemento.style.color = "red";
        return;
    }

    if (idade <= 0 || idade === "") {
        event.preventDefault(); // Passo 6: Impede o envio
        erroElemento.textContent = "Erro: A idade deve ser maior que 0!";
        erroElemento.style.color = "red";
        return;
    }

    // Se passar por tudo com sucesso
    alert("Cadastro realizado com sucesso!");
});
