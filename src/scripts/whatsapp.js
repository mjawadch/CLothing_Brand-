/* Builds wa.me links for every ".whatsapp-btn" on the page. */
const WHATSAPP_NUMBER = '923019680037';

export function buildWhatsAppLink(productName, price, extra) {
  let text = `Hi Ahmad Emporium! I'm interested in the *${productName}*`;
  if (price) text += ` (${price})`;
  text += `. Could you share more details?`;
  if (extra) text += `\n${extra}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function initWhatsAppButtons(root) {
  (root || document).querySelectorAll('.whatsapp-btn').forEach(btn => {
    const product = btn.dataset.product || document.title;
    const price = btn.dataset.price || '';
    const extra = btn.dataset.extra || window.location.href;
    btn.setAttribute('href', buildWhatsAppLink(product, price, extra));
  });
}
