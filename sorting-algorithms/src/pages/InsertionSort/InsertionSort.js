import './InsertionSort.css';
import '../../assets/global.css';
import { useState } from 'react';
import CardTable from '../../components/CardTable/CardTable';
import useTable from '../../hooks/useTable';

function InsertionSort() {
  const [ insertionSorted, setInsertionSorted] = useState([])
  const [ insertionSortOperations, setInsertionSortOperations] = useState()
  const [ cards, generateRandom, generateSorted, generateSortedDesc ] = useTable(setInsertionSorted, setInsertionSortOperations)

  const insertionSort = (update, arr) => {
    for (let j = 0; j < arr.length; j++) {
      for (let i = j - 1; i >= 0; i--) {

        if (arr[i] > arr[j]) {

          const aux = arr[i]
          arr[i] = arr[j]
          arr[j] = aux
          
          j--

          update(arr)
        }
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
        setInsertionSorted(state)
        setInsertionSortOperations(operationsState)
      }, operations * 250)
    }

    insertionSort(update, Array.from(cards))
  }

  return (
    <div className="InsertionSort">
      <div>
        <div className="Controls">
          <button onClick={() => generateRandom()}>Generate Random</button>
          <button onClick={() => generateSorted()}>Generate Sorted</button>
          <button onClick={() => generateSortedDesc()}>Generate Sorted Descending</button>
          <button onClick={() => run()}>InsertionSort</button>
        </div>
        <CardTable tableName='Unsorted Cards' main cards={cards}/>
        <CardTable tableName='InsertionSort - O(n²)' cards={insertionSorted} operations={insertionSortOperations}/>
      </div>
    </div>
  );
}

export default InsertionSort;
