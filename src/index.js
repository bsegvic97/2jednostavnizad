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
var f = [];
for (var i = 0; i < e.length; i++) {
  var b = e[i];
  var c = 0;
  while (b > 0) {
    c += b % 10;
    b = Math.floor(b / 10);
  }
  f.push(c);
}
console.log(f);
