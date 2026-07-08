const resultsDiv = document.getElementById('results');
const searchInput = document.getElementById('search');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

// RENDER FUNCTION
function renderCards(data) {
  if(data.length === 0){
    resultsDiv.innerHTML = `<p style="text-align:center; color:#9ca3af; padding:40px;">No secrets found. Try searching "Laplace" or "11 trick"</p>`;
    return;
  }
  
  resultsDiv.innerHTML = data.map(item => `
    <div class="card">
      <span class="card-badge">${item.category}</span>
      <h3 class="card-title">${item.id}. ${item.title}</h3>
      <p class="card-simple">${item.simple}</p>
      
      <div><b style="color:#a78bfa;">How it works:</b> ${item.how}</div>
      
      <div style="margin-top:15px;">
        <b style="color:#60a5fa;">5 Examples:</b>
        ${item.examples.map(ex => `
          <div class="card-example">
            <b>Q:</b> ${ex.q} <br>
            <b>A:</b> ${ex.a}
          </div>
        `).join('')}
      </div>
      
      <div class="card-tip"><b>Exam Tip:</b> ${item.examTip}</div>
    </div>
  `).join('');
}

// FILTER + SEARCH FUNCTION
function filterAndSearch() {
  const query = searchInput.value.toLowerCase();
  
  let filtered = SECRETS;
  
  // 1. Filter by category
  if(currentFilter !== 'all'){
    filtered = filtered.filter(item => item.category === currentFilter);
  }
  
  // 2. Filter by search
  if(query){
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.keywords.some(k => k.toLowerCase().includes(query)) ||
      item.simple.toLowerCase().includes(query)
    );
  }
  
  renderCards(filtered);
}

// BUTTON CLICK EVENTS
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    filterAndSearch();
  });
});

// SEARCH INPUT EVENT
searchInput.addEventListener('input', filterAndSearch);

// LOAD ALL ON START
window.addEventListener('DOMContentLoaded', () => {
  filterAndSearch();
});
