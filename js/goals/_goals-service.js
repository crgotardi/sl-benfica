import renderGoals, { renderGoal } from './_goals-render.js'
import { sumTotalOfColumn, generateId } from '../utils/_utils.js'

const team = document.querySelector('#team')
const player = document.querySelector('#player')
const goals = document.querySelector('#goals')
const addBtn = document.querySelector('#add-action')

export let goalsList = [
  {
    id: generateId(),
    team: 'Manchester City',
    player: 'Gonçalo Ramos',
    golos: 1
  },
  {
    id: generateId(),
    team: 'Sporting CP',
    player: 'Gonçalo Ramos',
    golos: 1
  },
];

function generateMessageError() {
  const errorMessage = document.createElement('span');
  errorMessage.classList.add('error-message')
  errorMessage.innerHTML = 'O campo é obrigatório'
  
  return errorMessage
}

function activeButton() {
  if (team.value || player.value || goals.value) {
    addBtn.disabled = false;
  }
}

function clearError(element) {
  element?.classList?.remove('error')
  element?.nextSibling?.remove(element)
}

function validateGoal() {
  if (!team.value || team.value === '<empty string>') {
    team.classList.add('error')
    team.after(generateMessageError())
    addBtn.disabled = true
    return false
  }

  if (!player.value || player.value === '<empty string>') {
    player.classList.add('error')
    player.after(generateMessageError())
    addBtn.disabled = true
    return false
  }

  if (!goals.value || goals.value === '<empty string>') {
    goals.classList.add('error')
    goals.after(generateMessageError())
    addBtn.disabled = true
    return false
  }

  addBtn.disabled = false

  return true
}

export function registerGoal() {
  if (!validateGoal(team, player, goals)) return

  const id = generateId();

  const goal = { 
    id, 
    team: team.value,
    player: player.value,
    goals: parseInt(goals.value)
  }

  goalsList.push(goal)

  renderGoal(goal)
  sumTotalOfColumn(goalsList, 3)
}

export function deleteGoal(id) {
  document.getElementById(id)?.remove()
  goalsList = goalsList.filter((goal) => id !== goal.id)
  sumTotalOfColumn(goalsList, 3)
}

team.addEventListener('change', () => {
  activeButton()
  clearError(team)
})

player.addEventListener('keyup', () => {
  activeButton()
  clearError(player)
})

goals.addEventListener('change', () => {
  activeButton()
  clearError(goals)
})

goals.addEventListener('keyup', () => {
  activeButton()
  clearError(goals)
})