export const setLocalStorage = (key: string, payload: any) => {
    localStorage.setItem(key, payload)
}

export const getFromLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}