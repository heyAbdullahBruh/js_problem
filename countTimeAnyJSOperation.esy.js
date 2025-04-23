
const startTime = performance.now();

const msg =
  "Emmet Abbreviatio Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odit itaque magni deleniti tenetur, natus ratione velit nemo officiis nesciunt. Sapiente, recusandae aut. Totam iste adipisci amet voluptate ea quam!";

for (let i = 0; i < msg.length; i++) {
  console.log(msg[i]);
}

const endTime = performance.now();

console.log(`The opeerating has time: ${endTime-startTime}ms`);
