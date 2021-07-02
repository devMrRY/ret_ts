export const setLocalStorage = (key: string, payload: any): void => {
    localStorage.setItem(key, payload)
}

export const getFromLocalStorage = (key: string): string | null => {
    return localStorage.getItem(key)
}

export const checkAuth = (): string => {
    const token:string = getFromLocalStorage("token")!;
    return token;
}