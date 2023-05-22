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

// ouvindo o processo
process.stdin.on("data", data => {
    process.stdout.write(data.toString().trim() + '\n')
})