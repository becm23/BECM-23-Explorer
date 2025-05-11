const options = {
  keys: ['name', 'role'],
  threshold: 0.3
};

const fuse = new Fuse(data, options);

const input = document.getElementById('searchInput');
const button = document.getElementById('searchButton');
const results = document.getElementById('results');

function displayResults(resultList) {
  results.innerHTML = '';
  resultList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.item.name} - ${item.item.role}`;
    results.appendChild(li);
  });
}

// 🔍 টাইপ করলেই সার্চ
input.addEventListener('input', () => {
  const searchText = input.value;
  const result = fuse.search(searchText);
  displayResults(result);
});

// 🖱️ বাটন ক্লিক করলেও সার্চ
button.addEventListener('click', () => {
  const searchText = input.value;
  const result = fuse.search(searchText);
  displayResults(result);
});
