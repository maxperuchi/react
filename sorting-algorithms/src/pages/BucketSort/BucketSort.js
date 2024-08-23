import './BucketSort.css';
import '../../assets/global.css';
import { useState } from 'react';
import CardTable from '../../components/CardTable/CardTable';
import useTable from '../../hooks/useTable';

function BucketSort() {
  const [ bucketSorted, setBucketSorted] = useState([])
  const [ bucketSortOperations, setBucketSortOperations] = useState()
  const [ cards, generateRandom, generateSorted, generateSortedDesc ] = useTable(setBucketSorted, setBucketSortOperations)

  const bucketSort = (update, arr) => {
    // create the buckets
    const buckets = []
    for (let i = 0; i < arr.length; i++) {
      buckets.push(0)
    }

    // fill the buckets
    for (let j = 0; j < arr.length; j++) {
      const item = arr[j]
      buckets[item - 1]++
      update(buckets)
    }
    
    // empty the buckets
    const sorted = []
    for(let b = 0; b < buckets.length; b++) {
      for(let i = 1; i <= buckets[b]; i++) {
        sorted.push(b+1)
        update(sorted)
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
        setBucketSorted(state)
        setBucketSortOperations(operationsState)
      }, operations * 250)
    }

    bucketSort(update, Array.from(cards))
  }

  return (
    <div className="BucketSort">
      <div>
        <div className="Controls">
          <button onClick={() => generateRandom()}>Generate Random</button>
          <button onClick={() => generateSorted()}>Generate Sorted</button>
          <button onClick={() => generateSortedDesc()}>Generate Sorted Descending</button>
          <button onClick={() => run()}>Bucket Sort</button>
        </div>
        <CardTable tableName='Unsorted Cards' main cards={cards} additional={`k = ${cards.length}`}/>
        <CardTable tableName='Bucket Sort - O(n + k)' cards={bucketSorted} operations={bucketSortOperations}/>
      </div>
    </div>
  );
}

export default BucketSort;
