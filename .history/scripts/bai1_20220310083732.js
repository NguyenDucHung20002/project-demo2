var arr = [2, 3, 5, 5, 6];
var half_arr = Math.round(arr.length / 2);
console.log(arr.slice(half_arr - 1, -(half_arr - 1)));

//[1,12,8,7,2,3] -> [12,1,8,7,2,3]

// var arr = [1,12,8,7,2,3]
// var odd = []
// var new_arr = []
// for(i=0;i<arr.length;i++){
//     if(arr[i] % 2 != 0){
//         odd.push(arr[i])
//         arr.splice(i,1)
//     }
// }
// var leng = Math.max(arr.length, odd.length)
// for(i=0;i<leng;i++){
//     new_arr.push(arr[i])
//     new_arr.push(odd[i])
// }

// console.log(new_arr)

//-------------------------
// var string = "con CAC adad DA"
// var reverse = ""

// for(i=0; i<string.length; i++){
//     if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
//         reverse = reverse + string[i].toLowerCase()
//     }else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
//         reverse = reverse + string[i].toUpperCase()
//     }else{
//         reverse = reverse + string[i]
//     }
// }
// console.log(reverse)

// B1
// function norepeat(string){
//     for(i = 0;i < string.length; i++){
//         var count = 0
//         for(j=0; j<string.length; j++){
//             if(string[i] === string[j]){
//                 count++
//             }
//         }
//         if(count === 1)
//         {
//             return string[i]
//         }
//     }
// }
// console.log(norepeat("cbcbdde"))

//B2
// var string = "I evol uoy os !hcum"
// var perfectString = ""
// var reverse = ""
// for(i=string.length-1;i>=0;i--){
//     if(string.charCodeAt(i) != 32){
//         reverse = reverse + string[i]
//     }else if(string.charCodeAt(i) === 32)
//     {
//         perfectString = " " + reverse +  perfectString
//         reverse = ""
//     }
// }
// perfectString = reverse + perfectString
// console.log(perfectString)

//B3

// function checkReverse(s1, s2) {
//     var reverse = ""
//     for(i=0;i<s1.length;i++){
//         reverse = s1[i] + reverse
//     }
//     if(reverse === s2){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(checkReverse("abcd","dcba"))
// console.log(checkReverse("abcd","dabe"))

//B4
// var fullname = "Nguyen Huynh Hoa"
// var count = 0;
// for(i=0; i< fullname.length; i++){
//     if(fullname.charCodeAt(i) === 32){
//         count++
//     }
// }
// console.log(count)

//B5
// var string = " NguYen vAn   tEO"
// var convert = ""
// string = string.trim()
// convert = convert + string[0].toLowerCase()
// for(i = 1; i<string.length; i++){
//     if(string.charCodeAt(i) === 32 && string.charCodeAt(i+1) === 32){
//         i++
//     }else if(string.charCodeAt(i) === 32 && string.charCodeAt(i+1) != 32){
//         convert = convert + string[i]
//         convert = convert + string[i+1].toLowerCase()
//         i++
//     }
//     else{
//         convert = convert + string[i].toUpperCase()
//     }
// }
// console.log(convert)

// var a = [1, 2, 3, 4];
// var b = a.slice(0);
// b.push(10);
// console.log(a);
// console.log(b);

// function sum1(...rest) {
//   var sum = 0;
//   for (var i = 0; i < rest.length; i++) {
//     sum += rest[i];
//   }
//   return sum;
// }

// console.log(sum1(1, 2, 3, 4, 5));
