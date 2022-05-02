/**
 * TODO list:
 * 1. validate card numbers in html and js
 * 2. validate private link
 * 3. validate mono link
 * 4. validate revolute link
 * 4. validate fallback link (not mono)
 * 5. update meta description
 * 6. update donate description
 */

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
