export interface queryUserArgs {
    id: number
}
export interface queryBetArgs {
    id: number
}
export interface queryBestBetArgs {
    limit: number
}
export interface createUserArgs {
    user: createUserSubArgs
}
export interface createBetArgs {
    bet: createBetSubArgs
}
export interface createBetSubArgs {
    userId: number
    betAmount: number
    chance: number
}
export interface createUserSubArgs {
    name: string
    balance: number
}