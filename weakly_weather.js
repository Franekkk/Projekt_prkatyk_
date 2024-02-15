// const weekly_weather = [70,72,68,65,74,74,73]
// const weekdays = ['sunday', 'monday' , 'tuesday' ,'wednesday', 'thurday', 'friday',  'saturday']


// for (let i = 0; i < weekdays.length; i++) {
//  let weekday = weekdays[i]
//  let temp = weekly_weather[i]
//  console.log('the temperture on ' , weekday, 'was', temp);
// } 

// let total_temp = 0
// for (let i = 0; i < weekdays.length; i++) {
//    let temp = weekly_weather[i]
//    total_temp += temp
    
// }
// let avarage = total_temp / weekly_weather.length
// console.log('the avarage tempertaure this week was', avarage);


// const winter_weather = [-12,-13,-14,-16,-16,-20,-6]
// let smallest = winter_weather[0]
// let largest = winter_weather[0]
// for( let i = 0; i < winter_weather.length; i++){
//     let temp = winter_weather[i]
//     if (temp > largest) {
//         largest = temp
        
//     }if (temp < smallest) {
//         smallest = temp 
//     }
// }
// console.log('the highest temp was' , largest);
// console.log('the lowest temp was' , smallest);

// const ww = [70,72,68,65,74,74,73]
// let max_delta = Math.abs(ww[0] - ww[1])
// for(let i = 0; i < ww.length -1; i++){{
//     let temp1 = ww[i]
//     let temp2 = ww[i + 1]
//     let delta = Math.abs(temp1 - temp2)

//     console.log('comparring', temp1 , temp2 , 'delta:', delta);
//     if( delta > max_delta){
//         max_delta = delta
//     }
// }}
// console.log('max delta', max_delta);


// function sunDelta(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length - 1; i++) {
//        let v1 = arr[i]
//        let v2 = arr[i + 1]
//        let delta = Math.abs(v1 - v2)
//         console.log();
//         total += delta
//     }
//     return total
// }
// console.log(sunDelta([2,6,12,19]));


// function contains(arr,value) {
//     for (let i = 0; i< arr.length;i++){
//         if(arr[i] === value){
//             return true 
//         }
//     }
//     return false
// }

// console.log(contains([14,55,67,88], 67));
// console.log(contains([14,55,67,88], 66));

// function isSorted(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i-1] > arr[i] ){
//             return false
//         }
//     } 
//     return true 
// }

// console.log(isSorted([1,2,3,4,5]));
// console.log(isSorted([1,2,3,4,5,2]));

// function isSorted2(arr) {
//     let isAscending = true
//     let isDescending = true 

//     for(let i =1; i < arr.length; i++){
//         let v1 = arr[1-1]
//         let v2 = arr[i]

//         if(v1 < v2){
//             isDescending = false
//         }

//         if(v1> v2){
//             isAscending = false
//         }
//     }
//     return isAscending || isDescending
// }

// console.log(isSorted2([39,42]));
// console.log(isSorted2([39,42,27]));
// console.log(isSorted2([1,2,3,4,5]));
// console.log(isSorted2([5,4,3,2,25]));

let timesTable  = [
    [1,2,3,4,5],
    [2,4,6,8,10],
    [3,6,9,12,15],
    [4,8,12,16,20],
    [5,10,15,20,25],
]

for (let row = 0; row < timesTable.length; row++){
    let line = ""
    for(let col = 0; col < timesTable[row].length; col++) {
        let value = timesTable[row][col]
        line += value + " "
    }
    console.log(line);
}



