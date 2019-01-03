class Matrix {
    constructor(rows, cols) {
        this.matrixMaker(rows, cols)
    }
    matrixMaker(rows, cols) {
        let n = 1
        let matrix = []
        for (let i = 0; i < rows; i++) {
            let row = []
            for (let j = 0; j < cols; j++) {
                row.push(n++)
            }
            matrix.push(row)
        }
        this.matrix = matrix
    }
    alter(row, col, num) {
        this.matrix[row][col] = num
    }
    print() {
        for(let i =0; i<this.matrix.length;i++){
            let t = ``
            for(let j=0;j<this.matrix[i].length;j++){
                t+=this.matrix[i][j]+`\t`
            }
            console.log(t)
        }
    }
    get(row,col) {
        return this.matrix[row][col]
    }
}