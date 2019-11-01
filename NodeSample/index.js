import {addNum, mulNum} from './util';

// const test = (num1, num2)=>{
//   addNum(num1, num2).then((sum)=>{
//     console.log(sum);
//     mulNum(sum).then((result)=>{
//       console.log(result);
//     })
//   })
//   .catch(err=>{
//     console.log(err);
//   })
// }

const test = async (num1 , num2)=> {
  try{  
    const sum = await addNum(num1, num2);
    console.log(sum);

    const mulSum = await mulNum(sum);
    console.log(mulSum);  
  } catch (error) {
    console.log(error);
  } finally {
    console.log('in finally block');    
  }
 
  // try {
  //   const mulSum = await mulNum(sum);
  //   console.log(mulSum);  
  // } catch (error) {
  //   console.log(error);
  // }
}

test(null,5);