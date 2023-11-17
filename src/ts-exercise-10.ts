// promise

// const promise = Promise.reject('Error');
const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    console.log('promise2 - setTimeout');
    resolve('success');
  }, 10);
});


promise.then((value)=> console.log('on resolve promise returned', value));

// zwraca Promise<void> bo nie ma returna
const usePromise = async (): Promise<void> => {
    const result = await promise;
    console.log('usePromise result = ', result);
    
}

const promiseReturnsString = async (): Promise<string> => {
    const result = await promise;
    return 'Hello =' + result;
}

// zwraca promise bo async:
async function abc() {return 1;}
// zwraca promise:
function myPromise() {return promise;}