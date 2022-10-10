import { sumTotalOfColumn } from '../utils/_utils.js'

function createGridItem() {
  const gridItem = document.createElement('div')
  gridItem.classList.add('grid-item')

  return gridItem
}

function createGridRow() {
  const gridRow = document.createElement('div')
  gridRow.classList.add('grid-row')

  return gridRow
}

function createGridContent(id) {
  const gridContent = document.createElement('div')
  gridContent.classList.add('grid-content')
  gridContent.id = id

  return gridContent
}

function createGridItemAction(goal) {
  const gridItem = createGridItem()
  gridItem.classList.add('text-right')
  gridItem.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent('open-dialog', { detail: { id: goal.id } }))
  });

  const action = document.createElement('img')
  action.src = '/assets/icon/trash-can-solid.png';
  action.alt = 'delete icon';
  action.classList.add('action-item')

  gridItem.appendChild(action)

  return gridItem
}

export function renderGoal(goal, index) {
  const footer = document.querySelectorAll('.grid-footer')[0];
  const gridContent = createGridContent(goal.id)
  const gridRow = createGridRow()

  for (let value of Object.values(goal).slice(1)) {
    const gridItem = createGridItem()
    if (typeof value === 'number') gridItem.classList.add(...['text-center', 'strong-item']);
    const span = document.createElement('span');
    span.innerText = value;

    gridItem.appendChild(span)

    gridRow.appendChild(gridItem)
  }

  const action = createGridItemAction(goal)

  gridRow.appendChild(action)
  gridContent.appendChild(gridRow)
  footer.before(gridContent)
}

export function renderGoals(goals) {
  goals.forEach((goal, index) => {
    renderGoal(goal, index)
  })

  sumTotalOfColumn(goals, 3)
}

export default renderGoals