//CHECKS: letter to number,  letter to number set, compare words, choosepivot all perform as expected
//check partition and quicksort

//FIND OUT HOW TO FIX IT CRASHING WITH TWO WORD INPUT


//if let line = readLine() {
//    print("You typed \(line)")
//}

var temp = 0
var largestArray = 0

func letterToNumber(letter: Character) -> Int {
    let number : Int
    
    switch letter {
        
    case "A","a":
        number = 1
    case "B","b":
        number = 2
    case "C","c":
        number = 3
    case "D","d":
        number = 4
    case "E","e":
        number = 5
    case "F","f":
        number = 6
    case "G","g":
        number = 7
    case "H","h":
        number = 8
    case "I","i":
        number = 9
    case "J","j":
        number = 10
    case "K","k":
        number = 11
    case "L","l":
        number = 12
    case "M","m":
        number = 13
    case "N","n":
        number = 14
    case "O","o":
        number = 15
    case "P","p":
        number = 16
    case "Q","q":
        number = 17
    case "R","r":
        number = 18
    case "S","s":
        number = 19
    case "T","t":
        number = 20
    case "U","u":
        number = 21
    case "V","v":
        number = 22
    case "W","w":
        number = 23
    case "X","x":
        number = 24
    case "Y","y":
        number = 25
    case  "Z","z":
        number = 26
    default:
        number = 0
    }
    return number
}



             
        



func letterToNumberSet(word: String) -> [Int] {
    var letterValueArray = [Int]()
    var letterValue : Int
    for character in word { // this for loops appends the corresponding number value of each letter to an array
        letterValue = letterToNumber(letter:character)
        letterValueArray.append(letterValue)
    }
    
    return letterValueArray

}

func equalizeArrayCount(array1: inout [Int], array2: inout [Int]) {
    while array1.count < array2.count {
        array1.append(0)
    }

    while array2.count < array1.count {
        array2.append(0)
    
    }
}


func compareTwoWords(string1: String, string2: String) -> Bool {
    var word1 : [Int] = letterToNumberSet(word:string1)
    var word2 : [Int] = letterToNumberSet(word:string2)
        
    equalizeArrayCount(array1: &word1, array2: &word2)
    
    for x in 0..<word1.count {
        
        if word1[x] > word2[x] {
            return true
        }

        if word2[x] > word1[x] {
            return false
        }
        
    }
    return false
}


func choosePivot(array: inout [String], leftBound: Int, rightBound: Int)  { //this function uses the median of three method: it takes the median value of the first, last, and middle index and moves it to the end of the array, making it ready for Quick Sort
    let mid = (rightBound/2) 

    if ( (compareTwoWords(string1:array[leftBound], string2:array[mid]) ) && !(compareTwoWords(string1:array[leftBound], string2:array[rightBound]) )) || ( !(compareTwoWords(string1:array[leftBound], string2:array[mid]) ) && !(compareTwoWords(string1:array[leftBound], string2:array[rightBound]) )) {
        array.swapAt(leftBound, rightBound)
    }

    if ( (compareTwoWords(string1:array[leftBound], string2:array[mid]) ) && !(compareTwoWords(string1:array[rightBound], string2:array[mid]) )) || ( !(compareTwoWords(string1:array[leftBound], string2:array[mid]) ) && !(compareTwoWords(string1:array[rightBound], string2:array[mid]) )) {
        array.swapAt(mid, rightBound)
    }

}



func partition(array: inout [String], leftBound: Int, rightBound: Int) -> (Int) {
    choosePivot(array: &array, leftBound: leftBound, rightBound: rightBound)

    var itemFromLeft = leftBound
    var itemFromRight = rightBound - 1
    var indexToReturn = 0    

    for _ in leftBound..<rightBound {

        while !compareTwoWords(string1: array[itemFromLeft], string2:array[rightBound]) {
            itemFromLeft += 1
        }

        while compareTwoWords(string1: array[itemFromRight], string2: array[rightBound]) {
            itemFromRight -= 1
        }

        if !(itemFromLeft > itemFromRight) {
            array.swapAt(itemFromLeft, itemFromRight)
        }

        if itemFromLeft > itemFromRight {
            indexToReturn = itemFromLeft
            array.swapAt(itemFromLeft, rightBound)
            return (indexToReturn) //Double return: .0 is the inwdex of the pivot placed correctly, .1 is the modified array
            
        }
    }

    return 0
    
    }
    


func quickSort(array:inout [String], leftBound: Int, rightBound: Int) { //yayyy finally
    choosePivot(array:&array, leftBound: leftBound, rightBound: rightBound)
    
    if leftBound >= rightBound {
        return 
    }

     let p = partition(array:&array, leftBound:leftBound, rightBound:rightBound) 

     quickSort(array:&array, leftBound:leftBound, rightBound:p-1)
     quickSort(array:&array, leftBound:(p+1), rightBound: rightBound)
        
    }

    

var newLineAdded = false
var wordArray = [String]()
var cycle = true

repeat {
    let line = readLine()

    if newLineAdded == false {
        print("\n")
        newLineAdded = true
    }
    
    if line != nil { // here, every line of input gets put into an array of strings
        wordArray.append(line!)
    }

    if line == nil { //when the input ends, we start to sort what's in the array! then, we have to output via stdout
  //      let finalArray = quickSort(array: wordArray, leftBound: 0, rightBound: (wordArray.count-1))
        cycle = false

        quickSort(array:&wordArray, leftBound: 0, rightBound:wordArray.count-1)
        
        for element in wordArray {
            print(element)
        }
        //        print(W[W.count/2])
        
            }
        } while cycle == true



      

