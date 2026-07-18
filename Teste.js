async function Reator() {

    function RandomNumber(min, max) {
        return Math.ceil(Math.random() * (max - min) + min)
    }

    function Pausar(tempo) {
        return new Promise(function (resolve) {
            setTimeout(resolve, tempo)
        })
    }

    let TempAtual = RandomNumber(10, 15000)
    console.log(`A temperatura atual é ${TempAtual}`)

    for (let ciclo = 1; ciclo <= 10; ciclo++) {

        let Resfriamento = RandomNumber(10, 500)
        console.log(`O resfriamento feito é ${Resfriamento}`)

        let Aquecimento = RandomNumber(10, 550)
        console.log(`O aquecimento efetuado foi de: ${Aquecimento}`)

        TempAtual = TempAtual - Resfriamento + Aquecimento;

        if (TempAtual >= 1000) {
            console.log(`Trava de segurança ativada! O resfriamento foi ativado para 30% do valor da temperatura!`)
            let ResfriamentoSecundaria = TempAtual * 0.3
            TempAtual = TempAtual - ResfriamentoSecundaria;
            console.log(Math.ceil(TempAtual))
            if (TempAtual >= 1000) {
                console.log(`Trava de segurança máxima ativada, o resfriamento será ativado para 50% do valor da temperatura!`)
                ResfriamentoSecundaria = TempAtual * 0.5
                TempAtual = TempAtual - ResfriamentoSecundaria;
                console.log(Math.ceil(TempAtual))
                if (TempAtual >= 1000) {
                    console.log(`Para inibir os possíveis problemas da temperatura estar muito alta iremos desativar o reator!`)
                    console.log(`Adm/cmd: sudo apt disable Reator`)
                    break;
                }
            }
        } else if (TempAtual < 1) {
            console.log(`O reator entrou em colapso e congelou! Sua temperatura mínina registrada foi de: ${TempAtual}`)
            break;
        }
    }

    await Pausar(1000)

    if (TempAtual < 1000) {
        if (TempAtual > 0) {
            console.log(`Reator estabilizado!`)
        } else {
            console.log(`O reator ficou com a sua temperatura negativa, não foi estabilizado!`)
        }
    } else {
        console.log(`O reator permaneceu com sua temperatura elevada, não foi estabilizado!`)
    }
}

Reator()