import './SelectionSort.css';
import '../../assets/global.css';
import { useState } from 'react';
import CardTable from '../../components/CardTable/CardTable';
import useTable from '../../hooks/useTable';

function SelectionSort() {
  const [ selectionSorted, setSelectionSorted] = useState([])
  const [ selectionSortOperations, setSelectionSortOperations] = useState()
  const [ cards, generateRandom, generateSorted, generateSortedDesc ] = useTable(setSelectionSorted, setSelectionSortOperations)

  const selectionSort = (update, arr) => {
    
    for(let j = 0; j < arr.length; j++) {
      let min = undefined
      
      for(let i = j; i < arr.length; i++) {
        if (min === undefined || arr[min] > arr[i]) {
          min = i
        }
        update(arr)
      }

      const temp = arr[j]
      arr[j] = arr[min]
      arr[min] = temp

      update(arr)
    }
  }

  const run = () => {
    let operations = 0

    const update = (result) => {
      operations++
      const state = Array.from(result)
      const operationsState = operations
      setTimeout(() => {
        setSelectionSorted(state)
        setSelectionSortOperations(operationsState)
      }, operations * 50)
    }

    selectionSort(update, Array.from(cards))
  }

  return (
    <div className="SelectionSort">
      <div>
        <div className="Controls">
          <button onClick={() => generateRandom()}>Generate Random</button>
          <button onClick={() => generateSorted()}>Generate Sorted</button>
          <button onClick={() => generateSortedDesc()}>Generate Sorted Descending</button>
          <button onClick={() => run()}>SelectionSort</button>
        </div>
        <CardTable tableName='Unsorted Cards' main cards={cards}/>
        <CardTable tableName='SelectionSort - O(n²)' cards={selectionSorted} operations={selectionSortOperations}/>
      </div>
    </div>
  );
}

export default SelectionSort;
