function func(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const heroText = document.querySelector(".hero-text");
      const deliveryCard = document.querySelectorAll(".delivery-card");
      if (!heroText) return;
      heroText.classList.remove("-translate-y-5");
      heroText.classList.add("opacity-100", "translate-y-0");
      if (!deliveryCard) return;
      deliveryCard.forEach((card) => {
        card.classList.remove("translate-x-5");
        card.classList.add("opacity-100", "translate-x-0");
      });
    }
  });
}
const options = { threshold: 0.5 };
const Myobserver = new IntersectionObserver(func, options);

export default Myobserver;
