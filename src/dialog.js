export default function (node) {
  node.addEventListener("click", () => {
    document.querySelector(`#${node.dataset.target}`).showModal();
  });
}
