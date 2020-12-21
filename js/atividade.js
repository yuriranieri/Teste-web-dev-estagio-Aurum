function executeFunc1() {
    let string = document.getElementById("string").value;
    let limit = document.getElementById("limit").value;
    let out = document.getElementById("out1");
    let result = removeRepeated(string, limit);

    out.innerHTML = `Resultado: ${result}<br>`;
}

function executeFunc2() {
    let string = document.getElementById("string2").value;
    let times = document.getElementById("times").value;
    let out = document.getElementById("out2");
    let result = replaceChar(string, times);

    out.innerHTML = `Resultado: ${result}`;
}

function executeFunc3() {
    let string1 = document.getElementById("string3").value;
    let string2 = document.getElementById("string4").value;
    let out = document.getElementById("out3");
    let result = lettersSum(string1, string2);

    out.innerHTML = `Resultado: ${result}`;
}

// criei 3 functions execute pois nos exercícios pede para retornar ou uma string ou um int se não essas eu botaria os innerHTML dentro de cada function

function removeRepeated(string, limit) {
    // nessa function só não consegui utilizar o limit, a function apaga todos caracteres repetidos se o limit for 1 se não apaga só uma vez

    let boolean = /(.)(?=.*\1)/.test(string); // retorna true se a string possui caracter repetido

    if (boolean) { // possui caracter repetido
        if (limit == 1) {
            string = string.replace(/(.)(?=.*\1)/gi, "");
        } else {
            string = "Não consgui fazer funcionar com limite sendo diferente de 1";
        }
    } else { // não possui caracter repetido
        string = "A string informada não possui caracter repetido";
    }

    return string;
}

function replaceChar (string, times) {
    /* nesssa function não consegui utilizar o times, ela só substtitui onde tem "?" de acordo pela anterior 
    e caso seja a primeira troca pela e ultima e se a ultima também for "?" troca pela penultima */

    let boolean = string.includes("?"); // retorna true se a string possui "?" 
    let len = string.length;

    if (boolean) { // possui "?"
        if (times == 1) {
            for (let i = 0; i < len; i++) {
                console.log(i)
                if (string.charAt(i) == "?") {

                    if (string.charAt(0) == "?" && string.charAt(len) == "?") { // verifica se o primeiro e o último caracter possui "?"
                        console.log("dentro do primeiro if antes do replace " + string);
                        string = string.replace(/\?/, string.charAt(len - 1));
                        console.log("dentro do primeiro if depois do primeiro replace " + string);
    
                    } else if (string.charAt(0) == "?") { // verifica se o primeiro caracter possui "?"
                        console.log("dentro do else if antes do replace " + string);
                        string = string.replace(/\?/, string.charAt(len));
                        console.log("dentro do else if depois do replace " + string);
    
                    } else {
                        console.log("dentro do else antes do replace " + string);
                        string = string.replace("?", string.charAt(i-1));
                        console.log("dentro do else depois do replace " + string);
    
                    }
                }
            }
        } else {
            string = "Não consgui fazer funcionar com times sendo diferente de 1";
        }

    } else { // não possui "?"
        string = "Não foi encontrado nenhum caracter ? na string informada";
    }

    return string;
}

function lettersSum(string1, string2) {
    let str1 = string1.split("").sort().toString().toUpperCase(); // transoforma em um array ordena transforma em string e trnasofrma tudo em letra maiúsculas
    let lenStr1 = str1.length - 1;
    let smallerStr1 = str1.charAt(0); // pega o primeiro caracter
    let biggerStr1 = str1.charAt(lenStr1); // pega o último caracter
    let smallerInt1 = 0;
    let biggerInt1 = 0;

    let str2 = string2.split("").sort().toString().toUpperCase();
    let lenStr2 = str2.length - 1;
    let smallerStr2 = str2.charAt(0);
    let biggerStr2 = str2.charAt(lenStr2);
    let smallerInt2 = 0;
    let biggerInt2 = 0;

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lenAlphabet = alphabet.length;

    let calculus = 0;

    console.log("str1: " + str1);
    console.log("str2: " + str2);

    for (let i = 0; i < lenAlphabet; i++) {
        if (alphabet.charAt(i) == smallerStr1) {
            smallerInt1 = i + 1;
            console.log("menor letra string1: " + smallerInt1);
        }

        if (alphabet.charAt(i) == smallerStr2) {
            smallerInt2 = i + 1;
            console.log("menor letra string2: " + smallerInt2);
        }

        if (alphabet.charAt(i) == biggerStr1) {
            biggerInt1 = i + 1;
            console.log("maior letra string1: " + biggerInt1);
        }

        if (alphabet.charAt(i) == biggerStr2) {
            biggerInt2 = i + 1;
            console.log("maior letra string2: " + biggerInt2);
        }
    }

    calculus = (biggerInt1 * smallerInt2) + (biggerInt2 * smallerInt1);

    return calculus;
}

let btadicionar = document.getElementById('btRemoveRepeat');
btadicionar.addEventListener('click', executeFunc1); // adiciona um evento ao clicar no botão chamando a função removeRepeated

let btdesempenho = document.getElementById('btReplaceChar');
btdesempenho.addEventListener('click', executeFunc2); // adiciona um evento ao clicar no botão chamando a função 

let btlista = document.getElementById('btLettersSum');
btlista.addEventListener('click', executeFunc3); // adiciona um evento ao clicar no botão chamando a função lettersSum