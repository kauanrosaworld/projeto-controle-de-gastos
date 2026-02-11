const tabela = document.getElementById('tabelaTransacoes');
const divSaldo = document.getElementById('saldo');
const form = document.getElementById('formTransacao');

async function carregarTransacoes() {
  const res = await fetch('/api/transactions');
  const transacoes = await res.json();

  let totalIncome = 0;
  let totalExpense = 0;

  tabela.innerHTML = '';

  transacoes.forEach(t => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="${t.kind.toLowerCase()}">${t.kind}</td>
      <td>${new Date(t.entry_date).toLocaleDateString('pt-BR')}</td>
      <td>R$ ${parseFloat(t.amount).toFixed(2)}</td>
    `;
    tabela.appendChild(tr);

    if(t.kind === 'INCOME') totalIncome += parseFloat(t.amount);
    else totalExpense += parseFloat(t.amount);
  });

  const saldo = totalIncome - totalExpense;
  divSaldo.textContent = `Saldo: R$ ${saldo.toFixed(2)}`;
  divSaldo.style.color = saldo >= 0 ? 'green' : 'red';
}

// Adicionar nova transação
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const kind = document.getElementById('tipo').value;
  const amount = parseFloat(document.getElementById('valor').value);
  const entry_date = document.getElementById('data').value;

  if(!kind || !amount || !entry_date) return;

  await fetch('/api/transactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kind, amount, entry_date })
  });

  form.reset();
  carregarTransacoes();
});

// Carregar transações ao abrir a página
carregarTransacoes();
