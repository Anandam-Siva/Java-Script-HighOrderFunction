// let arr1 = [5, 9, 7, 8, 2, 10]

// function square(arr) {
//     squa = []
//     for (ele of arr) {
//         let resu = ele * ele;
//         squa.push(resu);
//     }
//     console.log(squa);
// }
// square(arr1);

// function cube(arr) {
//     cubes = []
//     for (ele of arr) {
//         let resul = ele * ele * ele;
//         cubes.push(resul);
//     }
//     console.log(cubes);
// }
// cube(arr1);


///////////////////or////////////////////
////By Using of High Order Functions ////

let siva = [10, 15, 2, 3, 4]

function calculator(arrx, operator) {
    result = []
    for (ele of arrx) {
        let temp = operator(ele);
        result.push(temp);
    }
    console.log(result);
}

function sq(ele) {
    return ele * ele;
}

function cu(ele) {
    return ele * ele * ele;
}

calculator(siva, cu);

















