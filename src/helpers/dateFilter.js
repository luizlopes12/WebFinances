export const getCurrentMonth = () =>{
    let now = new Date();
    return `${now.getFullYear}-${now.getMonth+1}`
}

export const filterListByMonth = (list, date) =>{
    let newList = [];
    let [year, month] = date.split('-')
    for(let i in list){
        if(list[i].date.getFullYear() == parseInt(year) && list[i].date.getMonth() == parseInt(month)){
            newList.push(list[i])
        }
    }
    return newList
}