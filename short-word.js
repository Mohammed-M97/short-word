let smallWord = (str) => {
    let arr = str.split(' ')
    let smallArr = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < smallArr.length) {
            smallArr = arr[i]
        }
    }
    return smallArr.length
}

console.log(smallWord("Let's travel abroad shall we"));git