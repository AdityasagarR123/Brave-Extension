const sitesContainer = document.getElementById('sites');
const addBtn = document.getElementById('addSiteBtn');

// Load saved sites
chrome.storage.local.get(['sites'], (result) => {
  if (result.sites) {
    result.sites.forEach(addSiteToDOM);
  }
});

// Add new site
addBtn.addEventListener('click', () => {
  const name = prompt('Enter website name:');
  const url = prompt('Enter website URL (e.g. https://example.com)');
  if (!name || !url) return;

  const site = { name, url };
  chrome.storage.local.get(['sites'], (result) => {
    const sites = result.sites || [];
    sites.push(site);
    chrome.storage.local.set({ sites });
  });

  addSiteToDOM(site);
});

// Create site box with favicon
function addSiteToDOM(site) {
  const siteDiv = document.createElement('a');
  siteDiv.className = 'site';
  siteDiv.href = site.url;
  siteDiv.target = '_blank';

  const favicon = `https://www.google.com/s2/favicons?domain=${new URL(site.url).hostname}&sz=64`;

  siteDiv.innerHTML = `
    <img src="${favicon}" alt="${site.name}">
    <span>${site.name}</span>
  `;

  sitesContainer.appendChild(siteDiv);
}

// Search bar behavior
const search = document.getElementById('search');
search.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const value = search.value.trim();
    if (value.startsWith('http')) {
      window.open(value, '_blank');
    } else {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(value)}`, '_blank');
    }
  }
});
