

   async function a() 
{
    let ans = await calltoB()
    return ans
}

let res = a()
console.log(res)

function calltoB() 
{
    return setTimeout(() => {
        console.log('THis is an asynchronous work')
    }, 5000)
}