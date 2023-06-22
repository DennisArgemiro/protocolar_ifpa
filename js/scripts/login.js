const email = document.querySelector("#input_69")
const senha = document.querySelector("#input_99")
const button = document.querySelector("#form-pagebreak-next_97")

button.addEventListener('click', async()=>{
    if(email.value != "" && senha.value != ""){
        const response = await fetch("https://apilarici.dennisargemiro.repl.co", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            mode: "cors",
            body: JSON.stringify({
                query: "login",
                content:{
                    email:email.value,
                    senha: senha.value
                }
            })
        })
        if (response.status == 200){
            console.log("Deu Certo!!!!!!!!!")
        }else{
            console.log("Foi não mano.")
        }
    }
})