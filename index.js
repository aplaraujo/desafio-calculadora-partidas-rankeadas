function getHeroLevel(wins, losses) {
    const totalWins = wins - losses;
    let level = "";
    if(totalWins <= 10) {
        level = "Ferro"
    } else if(totalWins > 10 && totalWins <= 20) {
        level = "Bronze"
    } else if(totalWins > 20 && totalWins <= 50) {
        level = "Prata"
    } else if(totalWins > 50 && totalWins <= 80) {
        level = "Ouro"
    } else if(totalWins > 80 && totalWins <= 90) {
        level = "Diamante"
    } else if(totalWins > 90 && totalWins <= 100) {
        level = "Lendário"
    } else {
        level = "Imortal"
    }
    return `O Herói tem de saldo de ${totalWins} está no nível de ${level}`
}

let wins = Number(prompt("Digite o número de vitórias: "));
let losses = Number(prompt("Digite o número de derrotas: "));

alert(getHeroLevel(wins, losses));