import './CombSort.css';
import '../../assets/global.css';
import { useState } from 'react';
import CardTable from '../../components/CardTable/CardTable';
import useTable from '../../hooks/useTable';

function CombSort() {
  const factor = 1.3;
  const [ gapState, setGapState] = useState(0)
  const [ combSorted, setCombSorted] = useState([])
  const [ combSortOperations, setCombSortOperations] = useState()
  const [ cards, generateRandom, generateSorted, generateSortedDesc ] = useTable(setCombSorted, setCombSortOperations, 14)

  const getGap = (n) => {
    const gap = Math.floor(n / factor)
    if (gap < 1) return 1
    if (gap === 9 || gap === 10) return 11
    return gap
  }

  const combSort = (update, arr) => {
    let gap = arr.length
    let swapped = true

    while (gap !== 1 || swapped) {
      gap = getGap(gap)
      swapped = false
      for (let j = 0; j < arr.length - gap; j++) {
        if (arr[j] > arr[j+gap]) {
          const aux = arr[j]
          arr[j] = arr[j+gap]
          arr[j+gap] = aux
          swapped = true
        }
        update(arr, gap)
      }
    }
  }

  const run = () => {
    let operations = 0

    const update = (result, gap) => {
      operations++
      const state = Array.from(result)
      const operationsState = operations
      setTimeout(() => {
        setGapState(gap)
        setCombSorted(state)
        setCombSortOperations(operationsState)
      }, operations * 150)
    }

    combSort(update, Array.from(cards))
  }

  return (
    <div className="CombSort">
      <div>
        <div className="Controls">
          <button onClick={() => generateRandom()}>Generate Random</button>
          <button onClick={() => generateSorted()}>Generate Sorted</button>
          <button onClick={() => generateSortedDesc()}>Generate Sorted Descending</button>
          <button onClick={() => run()}>CombSort</button>
        </div>
        <CardTable tableName='Unsorted Cards' main cards={cards}/>
        <CardTable tableName='CombSort - O(n²)' cards={combSorted} operations={combSortOperations} additional={`Gap Size: ${gapState}`}/>
      </div>
    </div>
  )
}

export default CombSort;
