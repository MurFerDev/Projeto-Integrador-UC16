document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".region-card");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const region = card.getAttribute("data-region");
        window.location.href = `./jogos/${region}.html`;
      });
    });
  });
  