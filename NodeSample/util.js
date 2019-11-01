// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json') // (3)
// .catch(alert); // Error: 404

// async function loadJson(url){
//   let response = await fetch(url);
//   if(response.status == 200){
//     let json = await response.json();
//     return json;
//   } else {
//     throw new Error(response.status);
//   }
// }

export const addNum = (num1 , num2) => {
  return new Promise((resolve, reject)=>{
    // let sum = num1 + num2;
    // reject(sum);
    if(num1 == 'undefiend' || num1 == null || num2 == 'undefiend'){
      throw new Error('Error from addNum()');
    } else {
       let sum = num1 + num2;
       resolve(sum);
    }
   
  })
}

export const mulNum = (num) => {
  return new Promise((resolve, reject)=>{
    let multipliedValue = num * num;
    resolve(multipliedValue);
  })
}

// function thisThrows() {
//   throw new Error("Thrown from thisThrows()");
// }

// try {
//   thisThrows();
// } catch (e) {
//   console.error(e);
// } finally {
//   console.log('We do cleanup here');
// }