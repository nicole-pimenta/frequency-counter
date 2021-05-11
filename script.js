
const button = document.getElementById("countButton") 

function frequencyCounter(){
    let typedText = document.getElementById("textInput").value ;
    typedText = typedText.toLowerCase() ;    
    //typedText = typedText.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
     typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
     let words = typedText.split(/\s/);
    console.log(typedText)   
    console.log(words)

// contando letras 
const letterCounts = {};  

    for(let i=0 ; i<typedText.length ;i++){
    currentLetter = typedText[i]
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
         } else { 
            letterCounts[currentLetter]++; 
         }  
    } 

     for (let letter in letterCounts) { 
            const span = document.createElement("span"); 
            const textContent = `"${letter}": ${letterCounts[letter]}, `;
            span.innerText = textContent; 
            const letters = document.getElementById("lettersDiv");
            letters.appendChild(span); 
     }

// contando palavras: 
const wordCounts = {};  
console.log(words)
    for(let i=0 ; i<words.length ;i++){
    currentword = words[i] 
    console.log(currentword)
        if (wordCounts[currentword] === undefined) { 
            wordCounts[currentword] = 1; 
         } else { 
            wordCounts[currentword]++; 
         }  
    }  

    for (let word in wordCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${word}": ${wordCounts[word]}, `;
        span.innerText = textContent; 
        const words = document.getElementById("wordsDiv");
        words.appendChild(span); 
 }
}

button.addEventListener("click",function(){ 
    frequencyCounter() ;
}) ;


                         
   
