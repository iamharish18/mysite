// cards.js
export default class CardsHeadingImage {
  constructor(blockElement) {
    this.block = blockElement;
    this.init();
  }

  init() {
    const cardsData = JSON.parse(this.block.dataset.cards || "[]");

    this.block.innerHTML = cardsData
      .map(
        (card) => `
      <div class="card">
        <img src="${card.image}" alt="${card.heading}" />
        <h3>${card.heading}</h3>
      </div>
    `
      )
      .join("");
  }
}

// Initialize cards blocks on page
document.querySelectorAll(".cards-heading-image-only").forEach((block) => {
  new CardsHeadingImage(block);
});
