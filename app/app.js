const controller = new CardController();
document.querySelector('.form').addEventListener('submit', controller.add.bind(controller));