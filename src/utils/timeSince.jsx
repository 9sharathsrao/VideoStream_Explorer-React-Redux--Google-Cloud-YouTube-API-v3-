export const timeSince = (date) => {
    const second = Math.floor((new Date().valueOf() - date.valueOf())/1000)
    // console.log(second)

    //interval is shown in years, we calculating time difference in years.
    let interval = second/31536000

    if(interval>1){
        return Math.floor(interval) + "Years"
    }

    //Below is calculating in month
    interval = second/2592000
    if(interval>1){
        return Math.floor(interval) + "Months"
    }

    //in days
    interval = second/86400 
    if(interval>1){
        return Math.floor(interval) + "Days"
    }
    
    //per hour
    interval = second/3600 
    if(interval>1){
        return Math.floor(interval) + "hours"
    }

    interval = second/60 
    if(interval>1){
        return Math.floor(interval) + "minutes"
    }

    return Math.floor(second) + "seconds"
}