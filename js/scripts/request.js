const assunto = document.querySelector("#input_61")
const descricao = document.querySelector("#input_60")
const outro = document.querySelector("#input_100")
const button = document.querySelector("#form-pagebreak-next_66")

button.addEventListener("click", async () => {
    
    const response = await fetch(
        "https://apilarici.dennisargemiro.repl.co",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            mode:"cors",
            body: JSON.stringify({
                query:"request",
                content:{
                    Aluno_matricula: "20192290352",
                    Pedagogo_matricula: "20220723456",
                    assunto: assunto.value,
                    descricao: descricao.value,
                    outro: outro.value
                }
            })
        }
        )
    // window.location.href ="https://www.google.com"
    alert("Requisição feita com sucesso")

})