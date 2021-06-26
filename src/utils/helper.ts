export const setLocalStorage = (key: string, payload: any) => {
    localStorage.setItem(key, payload)
}

export const getFromLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}

export const getToken = () => {
    return getFromLocalStorage("token")
}