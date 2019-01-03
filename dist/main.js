const renderer = new Renderer()
const board = new GoldBoard()
board.loadBoard(20, 20)
renderer.renderBoard()
$(document).keypress(function (e) {
    e.which == 119 ? board.movePlayer(1, `up`) : null
    e.which == 97 ? board.movePlayer(1, `left`) : null
    e.which == 115 ? board.movePlayer(1, `down`) : null
    e.which == 100 ? board.movePlayer(1, `right`) : null
    e.which == 105 ? board.movePlayer(2, `up`) : null
    e.which == 106 ? board.movePlayer(2, `left`) : null
    e.which == 107 ? board.movePlayer(2, `down`) : null
    e.which == 108 ? board.movePlayer(2, `right`) : null
    renderer.renderBoard()
})