import './HeapSort.css';
import '../../assets/global.css';
import { useState } from 'react';
import CardTable from '../../components/CardTable/CardTable';
import useTable from '../../hooks/useTable';

function HeapSort() {
  const [ heapSorted, setHeapSorted] = useState([])
  const [ heapSortOperations, setHeapSortOperations] = useState()
  const [ cards, generateRandom, generateSorted, generateSortedDesc ] = useTable(setHeapSorted, setHeapSortOperations)

  const heapfy = (i, arr) => {
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


    const lindex = (i * 2) + 1
    const rindex = (i * 2) + 2


    // if there's no left child, 
    // then there is nothing to do
    const left = arr.at(lindex)
    if (!left) {
      return
    }

    heapfy(lindex, arr)

    const right = arr.at(rindex)
    if (right) {
      heapfy(rindex, arr)
    }

    const parent = arr.at(i)
    const greatestChild = Math.max(arr.at(lindex), arr.at(rindex))

    if (greatestChild > parent) {
      const aux = parent
      arr[i] = greatestChild

      if (greatestChild === arr[lindex]) {
        arr[lindex] = aux
        heapfy(lindex, arr)
      } else {
        arr[rindex] = aux
        heapfy(rindex, arr)
      }
    }
  }

  const heapSort = (update, arr) => {
    for (let i = Math.floor(arr.length / 2); i >= 0; i --) {
      heapfy(i, arr)
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
