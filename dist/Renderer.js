class Renderer{
    constructor(){
    }
    renderBoard(){
        $(`#gold-rush-main`).empty()
        let cls
        const type = {
            W:`wall`,
            C:`coin`,
            O:`space`,
            1:`p1`,
            2:`p2`
        }
        for(let i=0;i<board.matrix.length;i++){
            $(`#gold-rush-main`).append(`<div class="row" id="${i}"></div>`)
            for(let j=0;j<board.matrix[i].length;j++){
                let item =board.get(i,j)
                let cls = type[item]
                $(`#${i}`).append(`<span class=${cls}></span>`)
            }
        }
        console.log(board.matrix[0].length)
        $(`.row`).css(`grid-template-columns`,`repeat(${board.matrix[0].length}, 1fr)`)
        // $(`#gold-rush-template`).empty()
        // let source = $(`#gold-rush-template`).html()
        // let template = Handlebars.compile(source)
        // let newHTML = template(board.matrix)
        // $(`#gold-rush-main`).append(newHTML)
    }
    updateBoard(row,col){
        board.get(row,col)

    }
}