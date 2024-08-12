import './SelectionSort.css';
import '../../assets/global.css';
import { useState } from 'react';
import CardTable from '../../components/CardTable/CardTable';
import useTable from '../../hooks/useTable';

function SelectionSort() {
  const [ bubbleSorted, setBubbleSorted] = useState([])
  const [ bubbleSortOperations, setBubbleSortOperations] = useState()
  const [ cards, generateRandom, generateSorted, generateSortedDesc ] = useTable(setBubbleSorted, setBubbleSortOperations)

  const bubbleSort = (update, arr) => {
    let hasChanged = true;
    while (hasChanged) {
      hasChanged = false;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j+1]) {
          const aux = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = aux
          hasChanged = true;
        }
        update(arr)
      }
    }
  }

  const run = () => {
    let operations = 0

    const update = (result) => {
      operations++
      const state = Array.from(result)
      const operationsState = operations
      setTimeout(() => {
        setBubbleSorted(state)
        setBubbleSortOperations(operationsState)
      }, operations * 150)
    }

    bubbleSort(update, Array.from(cards))
  }

  return (
    <div className="SelectionSort">
      <div>
        <div className="Controls">
          <button onClick={() => generateRandom()}>Generate Random</button>
          <button onClick={() => generateSorted()}>Generate Sorted</button>
          <button onClick={() => generateSortedDesc()}>Generate Sorted Descending</button>
          <button onClick={() => run()}>Bubble Sort</button>
        </div>
        <CardTable tableName='Unsorted Cards' main cards={cards}/>
        <CardTable tableName='Bubble Sort - O(n²)' cards={bubbleSorted} operations={bubbleSortOperations}/>
      </div>
    </div>
  );
}

export default SelectionSort;
