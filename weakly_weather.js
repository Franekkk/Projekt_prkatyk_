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

// let timesTable  = [
//     [1,2,3,4,5],
//     [2,4,6,8,10],
//     [3,6,9,12,15],
//     [4,8,12,16,20],
//     [5,10,15,20,25],
// ]

// for (let row = 0; row < timesTable.length; row++){
//     let line = ""
//     for(let col = 0; col < timesTable[row].length; col++) {
//         let value = timesTable[row][col]
//         line += value + " "
//     }
//     console.log(line);
// }


// function largestProduct(aa) {
//     let largest = aa[0][0] * aa[0][1]
//     let row1 = 0
//     let col1 = 0
//     let row2 = 0
//     let col2 = 1

// function getCell(aa,row,col){
//     if( row < 0 || col < 0) {
//         return 0 
//     }
//     if(row >= aa.length) {
//         return 0
//     }
//     if (col >= aa[row].length){
//         return 0
//     }
//     return aa[row][col]
// }


//     function updateLargest(r1,c1,r2,c2){
//         let value = getCell(aa,r1,c1)
//         let other = getCell(aa,r2,c2)
      
//         if(value * other > largest){
//             largest = value * other 
//             row1 = r1
//             col1 = c1
//             row2 = r2
//             col2 = c2 -1
        
//         }
//     }



//     for (let row = 0; row < aa.length; row++){
//         for(let col = 0;col < aa[row].length;col++) {
//             let value = aa[row][col]

        
//                 updateLargest(row,col,row,col - 1)
                
//                 updateLargest(row,col,row,col + 1)
                
         
//                 updateLargest(row,col,row -1 ,col )
           
//                 updateLargest(row,col,row + 1,col )
//                 }
            
//         }
//         console.log(aa[row1][col1], '*', aa[row2][col2], '=', largest);
//         return largest

// }

//  let aa = [
//     [32,45,67,99],
//     [93,34,88,12],
//     [33,76,22,74],
//     [77,13,8,90],
//  ]

//  console.log(largestProduct(aa));

// const minefield = [
//     ['*', '*' ,'', ''],
//     ['*', "*", '',''],
//     ['', '', '',''],
//     ['','','*','']
// ]

// function minesweeper(minefield) {
//     function getCell(row,col){
//         if(row < 0||col <0)return 0
//         if(row >= minefield.length) return 0
//         if(col >= minefield[row].length ) return 0

//         if(minefield[row][col] === '*') return 1
//         return 0
//     }


//     for (let row = 0; row <minefield.length; row++) {
//         let line = ''
//         for(let col = 0; col < minefield[row].length; col++){
//             if (getCell(row,col) === 1){
//                 line += '*'
//             }else{
//                 let bombs = 0

//                 bombs += getCell(row - 1,col - 1)
//                 bombs += getCell(row - 1,col )
//                 bombs += getCell(row - 1,col + 1)

//                 bombs += getCell(row,col - 1)
//                 bombs += getCell(row,col + 1)

//                 bombs += getCell(row + 1,col - 1)
//                 bombs += getCell(row + 1,col )
//                 bombs += getCell(row + 1,col + 1)

//                 line += bombs
//             }
//         }
//         console.log(line);

//     }
// }
// minesweeper(minefield)

// function randomArray(max,size){
//     let result = new Array(size)
//     for (let i = 0; i < size ; i++) {
//         let random = Math.floor(max * Math.random())
//         result[i] = random

//     }
//     return result
// }


// function tallySort(aa){
//     let max = aa[0]
//     for (let i =0; i < aa.length;i++) {
//         max = Math.max(max, aa[i])
//     }
//     let tally = new Array(max)
//     for (let i =0; i < aa.length;i++) {
//         let value = aa[i]
//         if (tally[value] === undefined){
//             tally[value] = 0
//         }
//         tally[value]++
     
//     }
//     console.log(tally);
//     let result = new Array(aa.length)
//     let index = 0
//     for( let i = 0; i<tally.length;i++){
//         let occureces = tally[i]
//         let n =0 
//         while (n < occureces ){
//             result[index] = i 
//             index++
//             n++
//         }
//     }
//     return result
    
//     }


// let aa = randomArray(3,10)
// let bb = tallySort(aa)
// console.log(aa);
// console.log(bb);

class List {
    constructor() {
        console.log('created');
        this.data = new Array(10)
        this.size = 0
    }

    get(index) {
        if(index  < this.size){
            return this.data[index]
        }
        return null
    }

    set(index, value) {
        if (index >= 0 && indesx < this.size) {
            this.data[index] = value
        }
    }


    push(value) {
       if(this.size === this.data.length){
        this.grow()
       }
       this.data[this.size] = value
       this.size++
    } 

    remove(index){
        if(this.size === 0) {
            return null 
        }

       let reomved = this.data[index]
        for (let i = index;i < this.size - 1;i ++){
            this.data[i] = this.data[i + 1]
        }
        this.data[this.size - 1] = null
        this.size--        
         return reomved 
    }


    grow() {
        
        let aa = new Array(this.data.length * 2)
        for (let i = 0;i < this.data.length;i++) {
            aa[i] = this.data[i]
        } 
        
        this.data= aa
        console.log('growing from', this.data.length , 'to' , aa.length);
        console.log('str: ' , this.toString());
        console.log('data', this.data);
    }
    add(index, value) {
        if(this.size === this.data.length){
            this.grow()
        }
        for(let i = this.size; i > index; i--){
            this.data[i] = this.data[i-1]
        }
        this.data[index] = value
        this.size++
    }

    contains(value){
        for(let i = 0; i< this.size; i++){
            if(this.data[i] === value){
                return true
            }
        }
        return false
    }
    concat(other){
        let result = new List()
        for(let i = 0 ;i < this.size; i++){
            result.push(this.get(i))
        }
        for(let i = 0 ;i < other.size; i++){
            result.push(other.get(i))
        }
        return result
    }

    toString() {
        if (this.size === 0){

        return "[]"
        }else{
            let result = ""
            for (let i =0; i< this.size; i++){
                result += this.data[i] + " "
            }
            return "[" + result + "]"
        }
        }

}

const ll = new List()
ll.push(5)
ll.push(8)
ll.push(12)
ll.push(13)
ll.push(19)


const l2 = new List()
ll.push(23)
ll.push(24)
ll.push(25)

 
const l3 = ll.concat(l2)
console.log(l3.get(0) === 5);
console.log(l3.get(1) === 8);
console.log(l3.get(2) === 12);
console.log(l3.get(3) === 13);
console.log(l3.get(4) === 19);
console.log(l3.get(5) === 23);
console.log(l3.get(6) === 24);
console.log(l3.get(7) === 25);
  
