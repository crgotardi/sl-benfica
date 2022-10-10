// sum total of a grid column
export function sumTotalOfColumn(data, index) {
  console.log(data, index)
  const column = document.querySelectorAll('.grid-footer')[index-1].querySelector('span');
  
  const result = data.reduce((total, value) => {
    return total += Object.values(value)[index]
  }, 0)
  
  if (column) {
    column.innerHTML = result
  }
}

// generate randomic id
export function generateId() {
  return Math.round(Math.random() * 10000000)
}