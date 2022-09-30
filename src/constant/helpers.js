/**
 * Sleep function
 * for some delay
 * @param {*} ms 
 * @returns 
 */
export const sleep = (ms = 10) => new Promise(resolve => setTimeout(() => resolve(true), ms));