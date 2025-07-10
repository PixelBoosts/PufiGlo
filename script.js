let cos = [];
let total = 0;

function adaugaInCos(nume, pret) {
  cos.push({ nume, pret });
  total += pret;
  actualizeazaCos();
}

function actualizeazaCos() {
  const lista = document.getElementById('cosProduse');
  const totalElem = document.getElementById('total');
  
  lista.innerHTML = '';
  cos.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nume} - ${item.pret} lei`;
    lista.appendChild(li);
  });

  totalElem.textContent = total;
}
