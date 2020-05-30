import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var e = [523, 487, 320, 199, 244, 516];
let f=e.map(number=>Math.floor(number/100)+Math.floor((number/10))%10+number%10)
console.log(f);
//Ovdje sam koristio funkcionalnu programsku paradigmu jer je jednostavna za napisati (troznamenkasti uvelike olaksavaju), a najljepse izgleda
