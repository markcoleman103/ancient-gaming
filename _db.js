let games = [
    { id: '1', title: 'Zelda', platform: ['Switch'] },
    { id: '2', title: 'Final Fantasy 7', platform: ['PS5', 'Xbox'] },
    { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] }
]

let authors = [
    { id: '1', name: 'mario', verified: true },
    { id: '2', name: 'yoshi', verified: false },
    { id: '3', name: 'peach', verified: true }
]


let reviews = [
    { id: '1', rating: 9, content: 'test test', author_id: '1', game_id: '2' },
    { id: '2', rating: 10, content: 'test test', author_id: '2', game_id: '1' },
    { id: '3', rating: 7, content: 'test test', author_id: '3', game_id: '3' }
]

export default { games, reviews, authors }