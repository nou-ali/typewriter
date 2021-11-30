const sentence = "This is an animated sentence, a cool assignment from Lighthouse Labs";
let delay = 1000

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
}, delay) //since we have the delay of 1000, we need to delay it for each character by 50second
  delay += 50  // delays character by 50seconds
}
//console.log(delay);

setTimeout(() => {
  process.stdout.write('\n'); //adding a newline character 
}, delay)

