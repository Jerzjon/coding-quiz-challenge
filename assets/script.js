var startButton = $(".start-buttom")
var startPage =(".start-page")
var wrong = $("wrong answer")
var question1 =("#question1")
var correct1 =("#correct1")
var question2 =("#question2")
var correct2 =("#correct2")
var points = 0

startButton.click(startGame)
wrong.click(wronganswer)

function startGame() {
    console.log("Started")
    $(startPage).hide()
    $(question1).show()
}

correct1.click(setQuestion1)
   
function setQuestion1() {
    $(question1).hide()
    $(question2).show()
}

$(correct2).click(setQuestion2)

function setQuestion2() {
    $(question2).hide()
    $(question3).show()
}

function selectanswer() {

}

function wronganswer() {
    console.log("Wrong answer")
}