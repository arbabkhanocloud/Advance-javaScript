// ***** Delay Task ****** //
function delay(time){
    return new Promise(resolve =>{
                setTimeout(()=>{resolve('')
            },time)
        })
}
async function run() {
    console.log('a');
    await delay(2000)
    console.log('b');
    await delay(4000)
    console.log('c');
    await delay(6000)
    console.log('d');
    await delay(8000)
 }
run();