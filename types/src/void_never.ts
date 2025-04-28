function showFeedBack(message: string, type: string):void { // retorna por  baixo dos panos undefined
    alert(type.toUpperCase() + ": " + message)
}

const feedBack = showFeedBack("Olá", "info")

function showError(message: string): never { // nunca retorna nada
    throw new Error("Função marcada com never nunca retorna nada")
}

const error = showError("Mensagem de erro")
