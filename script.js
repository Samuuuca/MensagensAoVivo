const firebaseConfig = {
    apiKey: "AIzaSyAAqeqKW2daXvAGs3qIB6rTFd_I22pNve0",
    authDomain: "mandarmsg-eb7a5.firebaseapp.com",
    projectId: "mandarmsg-eb7a5",
    storageBucket: "mandarmsg-eb7a5.appspot.com",
    messagingSenderId: "326553069341",
    appId: "1:326553069341:web:7ce78aff257129717a23f4",
    measurementId: "G-Z9FEVC6Q83"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const bd = firebase.firestore()

mensagens = new Object()
let totalMensagens = [0]
const id = "5Y0zOwSIh0F8J9IY31vJ"

bd.collection('Mensagens').doc(id).onSnapshot(function (doc){
        
        if(doc.exists){
            
            const dados = doc.data()
            
            totalMensagens[0] = dados.TotaldeMensagens
            
            /*const format = `recado${totalMensagens[0]}`

            console.log(typeof format)
            
            mensa = dados.`recado${totalMensagens[0]}`
            console.log(totalMensagens[0], mensa)


            for(let i = 1 ; i <= totalMensagens[0]; i++){

                let teste = JSON.parse(`recado${totalMensagens[0]}`)

                parseSt
                
                var elemParag = document.createElement('p');
                elemParag.innerText = dados.teste
                document.body.appendChild(elemParag);

            }*/



        }
        else{
            console.log('não existe')
        }
})



function AtualizarMensagens(){

    const divanim = document.querySelector('.send')
    const inputNome = document.getElementById("nome").value
    const inputRecado = document.getElementById("recado").value


    if(inputNome == '' || inputRecado == ''){

        alert('Preencha todos os campos')

    }
    else{
        
        divanim.style.display = 'block'
        divanim.style.animation = 'down 5s'
        divanim.addEventListener('animationend', () => {

            divanim.style.display = 'none'

        })
        
        totalMensagens[0]++

        let objectIndex = `recado${totalMensagens}` 
        
        mensagens[objectIndex] = `${inputNome}: ${inputRecado}`;
        console.log(mensagens)

        bd.collection('Mensagens').doc(id).update(mensagens).then(() => {
            console.log(' adicionado')
        }).catch((error) => {
            console.error(error)
        })
        
        bd.collection('Mensagens').doc(id).update({
            TotaldeMensagens: totalMensagens[0]
        }).then(() => {
            console.log(' total atualizado')
        }).catch((error) => {
            console.error(error)
        })
    }
}
