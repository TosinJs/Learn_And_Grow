import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {
    const value = JSON.parse(localStorage.getItem(key))
    const [state, setState] = useState(() => value || [])
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    })
    return [state, setState]
}

export default useLocalStorage;