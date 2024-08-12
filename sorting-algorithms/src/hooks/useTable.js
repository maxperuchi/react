import { useState } from 'react';

function useTable(setSorted, setOperations, n) {
  const [ cards, setCards ] = useState([])

  const generateRandom = () => {
    const newCards = []

    for (let i = 0; i < n; i++) {
      let j = 0
      while (j < 1 || j > n) {
        j = Math.round(Math.random() * 10)
      }
      newCards.push(j)
    }

    setCards(newCards)
    setSorted(newCards)
    setOperations()
  }

  const generateSorted = () => {
    const newCards = []
    for (let i = 1; i <= n; i++) {
      newCards.push(i)
    }
    setCards(newCards)
    setSorted(newCards)
    setOperations()
  }

  const generateSortedDesc = () => {
    const newCards = []
    for (let i = n; i >= 1; i--) {
      newCards.push(i)
    }
    setCards(newCards)
    setSorted(newCards)
    setOperations()
  }

  return [ cards, generateRandom, generateSorted, generateSortedDesc ]
}

export default useTable;