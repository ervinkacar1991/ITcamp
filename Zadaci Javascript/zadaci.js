function stockList(listOfArt, listOfCat){
    res = []
    arr = []
    if (listOfCat.length === 0 || listOfArt.length === 0) {
        return ""
    }

    for (let i = 0; i < listOfArt.length; i++) {
        arr.push(listOfArt[i].split(" "))
    }

    for (let i = 0; i < listOfCat.length; i++) {
        num = 0
        for (let j = 0; j < arr.length; j++) {
            if (listOfCat[i] === arr[j][0][0]) {
                num += parseInt(arr[j][1])
            }
        }
        res.push(`(${listOfCat[i]} : ${num})`)
    }
    res = res.join(" - ")
    return res
}


b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B", "Z"]

console.log(stockList(b,c))