var body = document.getElementsByTagName('body')[0];
var b = document.createElement('button');
a.id = 'a1'
a.style.width = '10%';
a.style.height = '32px';
a.innerHTML = 'Submit';
a.style.align = 'center';
a.style.backgroundColor = 'blue';
body.appendChild(a);
var s = document.createElement('h1');
s.style.textAlign = 'center';
s.id = 't1';
body.appendChild(s);

function random() {
    var a = [];
    while (a.length < 5) {
        var v = Math.floor(Math.random() * 10);
        if (a.every((x) => x !== v)) {
            a.push(v);
        }
    }
    document.getElementById("t1").innerHTML = a.join("");
}

document.getElementById("a1").onclick = rando
