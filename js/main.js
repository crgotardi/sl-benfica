import appendDialog from './utils/_dialog.js';
import renderGoals from './goals/_goals-render.js'
import { goalsList, registerGoal, deleteGoal } from './goals/_goals-service.js'
import menu from './menu/_menu.js';

addEventListener('DOMContentLoaded', () => {
  renderGoals(goalsList)
  appendDialog({
    id: 'confirmation-dialog-remove-goal',
    title: 'Remover golo', 
    content: 'Tens certeza de que queres remover o golo?', 
    action: {
      label: 'Remover golo',
    }
  })
});

document.querySelector('#add-action').addEventListener('click', (e) => {
  registerGoal(goalsList)
});

document.addEventListener('open-dialog', (e) => {
  const dialog = document.querySelector('.dialog-container');
  if (dialog) {
    dialog.classList.add('is-open')
  }

  const dialogConfirmation = document.querySelector('#dialog-confirm-action');
  if (dialogConfirmation) {
    dialogConfirmation.addEventListener('click', () => {
      dialog.classList.remove('is-open')
      deleteGoal(e.detail.id)
    })
  }
});