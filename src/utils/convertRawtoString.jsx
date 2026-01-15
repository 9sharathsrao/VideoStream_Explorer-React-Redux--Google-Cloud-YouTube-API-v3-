//In JS parsing is the process of analyzing raw text or data in one format(usually a string) and converting it into structured, usable format, like a JS obj.
export const convertRawtoString = (labelValue,isSub=false) => {
    //Below is number of views
    console.log(labelValue)

    const num = Math.abs(Number(labelValue))

    //Number of views more than billion:- 1B
    if(num>=1.0e9){
        return (num/1.0e9).toFixed(0) + "B"
    }

    //Number of views more than million:- 1M
    if(num>=1.0e6){
        return (num/1.0e6).toFixed(0) + "M"
    }

    //Number of views more than thousands:- 1K.....1.50 K
    if(num>=1.0e3){
        return (num/1.0e3).toFixed(isSub ? 2 : 0) + "K"
    }
    
    return num.toString()
}