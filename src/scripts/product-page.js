function init() {
  // Gallery thumbnail switching
  const mainImage = document.getElementById('pdMainImage');
  const thumbs = document.querySelectorAll('.pd-thumb');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      if (mainImage && thumb.dataset.src) mainImage.src = thumb.dataset.src;
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Tab switching
  const tabBtns = document.querySelectorAll('.pd-tab-btn');
  const tabPanels = document.querySelectorAll('.pd-tab-panel');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(btn.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
