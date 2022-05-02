(()=>{
    let resetId

    const copyNumber = (block) => {
        clearTimeout(resetId);
        block.classList.add('copied')
        
        const cardNumber = document.getElementById('card-number').innerText.replaceAll(/\s/g, "")
        navigator.clipboard.writeText(cardNumber)

        resetId = setTimeout(() => {
            resetCopy(block)
        }, 10000)
    }

    const resetCopy = (block) => {
        block.classList.remove('copied')
    }

    const initCopy = () => {
        const block = document.getElementById('card-number-block')
        block.onclick = () => {
            copyNumber(block)
        }
    }

    initCopy()
})()
