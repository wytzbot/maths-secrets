let activeTab = 'all';
const grid = document.getElementById('secrets-grid');
const search = document.getElementById('search');

function renderSecrets(list) {
  if(list.length === 0){
    grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color:#9ca3af;">No secrets found. Try another keyword.</p>`;
    return;
  }
  grid.innerHTML = list.map(s => `
    <div class="card" onclick="openModal(${s.id})">
      <span class="tag">${s.category}</span>
      <h3>${s.title}</h3>
      <p>${s.simple}</p>
    </div>
  `).join('');
}

function openModal(id) {
  const s = SECRETS.find(x => x.id === id);
  if(!s) return;
  document.getElementById('modal-body').innerHTML = `
    <h2>${s.title}</h2>
    <p><b>The gist:</b> ${s.simple}</p>
    <p><b>How to do it:</b> ${s.how}</p>
    <h4>5 Examples Worked Out:</h4>
    ${s.examples.map(ex => `
      <div class="example">
        <b>Q:</b> ${ex.q} <br>
        <b>A:</b> ${ex.a}
      </div>
    `).join('')}
    <p><b>Exam tip:</b> ${s.examTip}</p>
  `;
  document.getElementById('modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() { 
  document.getElementById('modal').classList.add('hidden'); 
  document.body.style.overflow = 'auto';
}
function closeModalOutside(event){
  if(event.target.id === 'modal') closeModal();
}

function filterTab(tab, el) {
  activeTab = tab;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  runSearch();
}

function runSearch() {
  const q = search.value.toLowerCase().trim();
  let list = SECRETS;
  if(activeTab !== 'all') list = list.filter(s => s.category === activeTab);
  if(q) list = list.filter(s => 
    s.title.toLowerCase().includes(q) || 
    s.keywords.some(k => k.includes(q)) ||
    s.simple.toLowerCase().includes(q)
  );
  renderSecrets(list);
}

search.addEventListener('input', runSearch);

// Initial load
renderSecrets(SECRETS);
