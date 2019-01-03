class GoldBoard extends Matrix {
    constructor() {
        super()
        this.players = {}
    }
    loadBoard(rows, cols) {
        let matrix = []
        for (let i = 0; i < rows; i++) {
            // let row = []
            // for (let j = 0; j < cols; j++) {
            //     row.push(`.`)
            // }
            // matrix.push(row)
            matrix.push(`O`.repeat(cols).split(``))//is this more effishint?
        }
        this.matrix = matrix
        this.coinGen()
        this.matrix[0][0] = 1
        this.matrix[cols - 1][rows - 1] = 2
        this.players = { 1: { x: 0, y: 0 }, 2: { x: cols - 1, y: rows - 1 } }
    }
    movePlayer(player, dir) {
        let dirs = {
            up: { y: -1, x: 0 },
            down: { y: 1, x: 0 },
            left: { y: 0, x: -1 },
            right: { y: 0, x: 1 }
        }
        this.alter(this.players[player].y, this.players[player].x, `.`)
        this.players[player] = { x: this.players[player].x + dirs[dir].x, y: this.players[player].y + dirs[dir].y }
        this.alter(this.players[player].y, this.players[player].x, player)
    }
    coinGen() {
        const coinDist = {
            c: 40,
            w: 60,
        }
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                let ran = Math.random() * 100
                if (ran < coinDist.c) {
                    this.matrix[i][j] = `C`
                } else if(ran<coinDist.w){
                    this.matrix[i][j] = `W`
                }
            }
        }
    }

}