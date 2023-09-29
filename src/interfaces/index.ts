export interface queryUserArgs {
    id: number
}
export interface queryBetArgs {
    id: number
}
export interface queryBestBetArgs {
    limit: number
}
export interface createBetArgs {
    bet: createBetSubArgs
}
export interface createBetSubArgs {
    userId: number
    betAmount: number
    chance: number
}