// // Listen for messages from the main thread.
// // If the message command is "generate", call `generatePrimes()`
// addEventListener("message", (message) => {
//     if (message.data.command === "generate") {
//       generatePrimes(message.data.quota);
//     }
//   });
  
//   // Generate primes (very inefficiently)
//   function generatePrimes(quota) {
//     function isPrime(n) {
//       for (let c = 2; c <= Math.sqrt(n); ++c) {
//         if (n % c === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     const primes = [];
//     const maximum = 1000000;
  
//     while (primes.length < quota) {
//       const candidate = Math.floor(Math.random() * (maximum + 1));
//       if (isPrime(candidate)) {
//         primes.push(candidate);
//       }
//     }
  
//     // When finished, send message to main thread,
//     postMessage(primes.length);
//   }
// //   this runs as soon as the main script creates the worker
// // post message will be sent instead of returning value
// that was an example of a dedicated worker which means it used by a single script instance
// some other types are Shared workers can be shared by several different scripts running in different windows.
// and Service workers act like proxy servers, caching resources so that web applications can work when the user is offline. They're a key component of Progressive Web Apps.