import './ShakeSort.css';
import '../../assets/global.css';
import { useState } from 'react';
import CardTable from '../../components/CardTable/CardTable';
import useTable from '../../hooks/useTable';

function ShakeSort() {
  const [ backingState, setBackingState] = useState(false)
  const [ shakeSorted, setShakeSorted] = useState([])
  const [ shakeSortOperations, setShakeSortOperations] = useState()
  const [ cards, generateRandom, generateSorted, generateSortedDesc ] = useTable(setShakeSorted, setShakeSortOperations)

  const shakeSort = (update, arr) => {
    let hasChanged = true
    while (hasChanged) {
      hasChanged = false
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j+1]) {
          const aux = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = aux
          hasChanged = true
        }
        update(arr, true)
      }
      
      if (hasChanged) {
        for (let j = arr.length - 1; j >= 0; j--) {
          if (arr[j-1] > arr[j]) {
            const aux = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = aux
            hasChanged = true
          }
          update(arr, false)
        }
      }
    }
  }

  const run = () => {
    let operations = 0

    const update = (result, backing) => {
      operations++
      const state = Array.from(result)
      const operationsState = operations
      setTimeout(() => {
        setBackingState(backing)
        setShakeSorted(state)
        setShakeSortOperations(operationsState)
      }, operations * 150)
    }

    shakeSort(update, Array.from(cards))
  }

  return (
    <div className="ShakeSort">
      <div>
        <div className="Controls">
          <button onClick={() => generateRandom()}>Generate Random</button>
          <button onClick={() => generateSorted()}>Generate Sorted</button>
          <button onClick={() => generateSortedDesc()}>Generate Sorted Descending</button>
          <button onClick={() => run()}>ShakeSort</button>
        </div>
        <CardTable tableName='Unsorted Cards' main cards={cards}/>
        <CardTable tableName='ShakeSort - O(n²)' cards={shakeSorted} operations={shakeSortOperations} additional={`Direction: ${backingState ? '<<<' : '>>>'}`}/>
      </div>
    </div>
  )
}

export default ShakeSort;
