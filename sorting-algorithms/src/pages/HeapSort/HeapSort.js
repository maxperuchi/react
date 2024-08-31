import './HeapSort.css';
import '../../assets/global.css';
import { useState } from 'react';
import CardTable from '../../components/CardTable/CardTable';
import useTable from '../../hooks/useTable';

function HeapSort() {
  const [ heapSorted, setHeapSorted] = useState([])
  const [ heapSortOperations, setHeapSortOperations] = useState()
  const [ cards, generateRandom, generateSorted, generateSortedDesc ] = useTable(setHeapSorted, setHeapSortOperations)

  const heapfy = (p, l, arr, update) => {
    //      3
    //   4      2
    // 1   9  7   8
    //  0123456
    // [3421978]

    //      3
    //   4      8
    // 1   9  7   2
    //  0123456
    // [3481972]

    //      3
    //   9      8
    // 1   4  7   2
    //  0123456
    // [3981472]

    //      9
    //   3      8
    // 1   4  7   2
    //  0123456
    // [9381472]

    //      9
    //   4      8
    // 1   3  7   2
    //  0123456
    // [9481372]

    const lindex = (p * 2) + 1
    const rindex = (p * 2) + 2

    if (p > l || lindex > l || rindex > l) {
      return;
    }

    update(arr)

    const right = arr.at(rindex)
    if (right) {
      heapfy(rindex, l, arr, update)
    }
    
    const left = arr.at(lindex)
    if (left) {
      heapfy(lindex, l, arr, update)
    }

    const greatestChild = Math.max(arr.at(lindex), arr.at(rindex))
    const parent = arr.at(p)

    if (greatestChild > parent) {
      arr[p] = greatestChild

      if (greatestChild === arr[lindex]) {
        arr[lindex] = parent
        heapfy(lindex, l, arr, update)
      } else {
        arr[rindex] = parent
        heapfy(rindex, l, arr, update)
      }
    }
  }

  const heapSort = (update, arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      heapfy(0, i, arr, update)
      
      if (arr[0] > arr[i]) {
        const aux = arr[i]
        arr[i] = arr[0]
        arr[0] = aux
      }
    }

    update(arr)
  }

  const run = () => {
    let operations = 0

    const update = (result) => {
      operations++
      const state = Array.from(result)
      const operationsState = operations
      setTimeout(() => {
        setHeapSorted(state)
        setHeapSortOperations(operationsState)
      }, operations * 150)
    }

    heapSort(update, Array.from(cards))
  }

  return (
    <div className="HeapSort">
      <div>
        <div className="Controls">
          <button onClick={() => generateRandom()}>Generate Random</button>
          <button onClick={() => generateSorted()}>Generate Sorted</button>
          <button onClick={() => generateSortedDesc()}>Generate Sorted Descending</button>
          <button onClick={() => run()}>HeapSort</button>
        </div>
        <CardTable tableName='Unsorted Cards' main cards={cards}/>
        <CardTable tableName='HeapSort - O(n*log(n))' cards={heapSorted} operations={heapSortOperations}/>
      </div>
    </div>
  );
}

export default HeapSort;
