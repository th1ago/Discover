const question = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?"
]

const ask = (index = 0) => {
    process.stdout.write(question[index] + "\n\n")
}

ask()

const answers = []
// ouvindo eventos de dados
process.stdin.on("data", data => { // guarda a funcao como callback
    answers.push(data.toString().trim())
    if(answers.length < question.length){
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Legal Thiago

    O que voce aprendeu hoje foi:
    ${answers[0]}
    O que te deixou triste hoje foi:
    ${answers[1]}
    O que voce faria para melhorar hoje foi:
    ${answers[2]}
    O que te deixou feliz hoje:
    ${answers[3]}

    Volte amanha para novas reflexoes!!
    `)
})