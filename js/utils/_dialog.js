function appendDialog(dialogProps) {
  const dialogContainer = document.createElement('div');
  dialogContainer.setAttribute('id', dialogProps.id)
  dialogContainer.classList.add('dialog-container')

  const dialog = document.createElement('div');
  dialog.classList.add('dialog')

  const dialogTitle = document.createElement('div');
  dialogTitle.classList.add('dialog-title')
  const dialogTitleValue = document.createElement('h2');
  dialogTitleValue.innerHTML = dialogProps.title;
  dialogTitle.appendChild(dialogTitleValue);

  const dialogContent = document.createElement('div');
  dialogContent.classList.add('dialog-content')
  const dialogContentValue = document.createElement('p');
  dialogContentValue.innerHTML = dialogProps.content;
  dialogContent.appendChild(dialogContentValue);

  const dialogActions = document.createElement('div');
  dialogActions.classList.add('dialog-actions')

  const dialogCancelAction = document.createElement('button');
  dialogCancelAction.classList.add('secondary-button')
  dialogCancelAction.id = 'dialog-cancel-action'
  dialogCancelAction.innerHTML = 'Cancelar'
  dialogCancelAction.addEventListener('click', () => {
    dialogContainer.classList.remove('is-open')
  })

  const dialogConfirmAction = document.createElement('button');
  dialogConfirmAction.classList.add('primary-button')
  dialogConfirmAction.id = 'dialog-confirm-action'
  dialogConfirmAction.innerHTML = dialogProps.action.label

  dialogActions.appendChild(dialogCancelAction)
  dialogActions.appendChild(dialogConfirmAction)

  dialog.appendChild(dialogTitle)
  dialog.appendChild(dialogContent)
  dialog.appendChild(dialogActions)

  dialogContainer.appendChild(dialog)

  const dialogBackdrop = document.createElement('div');
  dialogBackdrop.classList.add('dialog-backdrop')
  dialogBackdrop.addEventListener('click', () => {
    dialogContainer.classList.remove('is-open')
  })

  dialogContainer.appendChild(dialogBackdrop)
  document.body.appendChild(dialogContainer)
}

export default appendDialog