
const app = function () {
    const game = {};

    function init() {

        console.log('init ready');
        // game.main = document.querySelector('#game')

        // game.main.textContent = 'hello world';
        const main = MainGame();
        console.log(main);
        // game.scoreboard = document.createElement('div');
        // game.scoreboard.textContent = 'Dealer 0 vs Player 0';
        // game.scoreboard.textContent.fontSize = '2em';

        main.append(createScoreboard()); // game.scoreboard

        // game.table = document.createElement('div');
        const table = CreateTable(main);

        const dealer = CreateDealerDiv();
        // game.dealer = document.createElement('div');
        // game.dealerCards = document.createElement('div');
        // game.dealerCards.textContent = 'Dealer Cards';
        // game.dealerScore = document.createElement('div');
        // game.dealerScore.innerText = '-'; // .textContent = '-';
        // game.dealerScore.classList.add('score');

        // game.table.append(dealerDiv); // game.dealer
        table.append(dealer)
        const dealerScore = CreateDealerScore(dealer);
        const dealerCards = CreateDealerCards(dealer);

        dealer.append(dealerScore);
        dealer.append(dealerCards);

        // game.player = document.createElement('div');
        // game.playerCards = document.createElement('div');
        // game.playerCards.textContent = 'Player Cards';
        // game.playerScore = document.createElement('div');
        // game.playerScore.innerText = '-'; // .textContent = '-';
        // game.playerScore.classList.add('score');
        const status = CreateStatus(table);
        const player = CreatePlayer(table);
        const playerCards = CreatePlayerCards(table);
        const playerScore = CreateplayerScore(table);

        table.append(player);
        dealer.append(playerScore);
        table.append(playerCards);
       
        const dashBoard = CreateDashboard(table);
       // const status = CreateStatus(table);
        // dashBoard = document.createElement('div');
        // game.status = document.createElement('div');
        // game.status.classList.add('message')
        // game.status.innerText = 'Message for player';

        // game.btnDeal = document.createElement('button');
        // game.btnDeal.innerText = 'Deal';
        // game.btnDeal.classList.add('btn');
        const btnDeal = CreateDealerBtn();
        dashBoard.append(btnDeal);

        const btnHit = CreatePlayerHitBtn(dashBoard);
        // game.btnHit = document.createElement('button');
        // game.btnHit.innerText = 'HIT';
        // game.btnHit.classList.add('btn');
        dashBoard.append(btnHit);
        const btnStand = CreateStandBtn(dashBoard);
        dashBoard.append(btnStand);
       
        const playerCash = createPlayerCash(dashBoard)
        dashBoard.append(playerCash);

        const inputBet = CreateInputBet()
        dashBoard.append(inputBet)
        const btnBetAmount = CreateBetAmountBtn(dashBoard);
        dashBoard.append(btnBetAmount);


       dashBoard.append(status)
        table.append(dashBoard)
        main.append(table)


        main.append(table);
        const GameTwoDiv = createGameTwo()
        main.append(GameTwoDiv);
        
        createGameTwoElements(GameTwoDiv);

        
    }

    function createScoreboard() {

        const scoreboard = document.createElement('div');
        scoreboard.textContent = 'Dealer 0 vs Player 0';
        scoreboard.textContent.fontSize = '2em';

        return scoreboard;
    }
    function CreateDealerDiv(dealerScore, dealerCards) {
        const dealer = document.createElement('div');
        dealer.innerText = 'dealer';
        // game.table.append(game.dealer);
        // dealer.append(dealerScore);
        // dealer.append(dealerCards);

        return dealer;
    }
    function CreateDealerCards(dealer) {
        const dealerCards = document.createElement('div');
        dealerCards.textContent = 'Dealer Cards';
        dealer.append(dealerCards);
        return dealerCards
    }
    function CreateDealerScore(dealer) {
        const dealerScore = document.createElement('div');
        dealerScore.innerText = '-'; // .textContent = '-';
        dealerScore.classList.add('score');
        dealer.append(dealerScore);
        return dealerScore
    }
    function CreatePlayer(table) {
        const Player = document.createElement('div');
        table.append(Player);
        return Player;
    }
    function CreatePlayerCards(table) {
        const playerCards = document.createElement('div');
        playerCards.textContent = 'Player Cards';
        table.append(playerCards);
        return playerCards;
    }
    function CreateplayerScore(dealer) {
        const playerScore = document.createElement('div');
        playerScore.innerText = '-'; // .textContent = '-';
        dealer.append(playerScore);
        return playerScore
    }
    function CreateDealerBtn() {
        const btnDeal = document.createElement('button');
        btnDeal.innerText = 'Deal';
        btnDeal.classList.add('btn');
        return btnDeal;

    }
    function CreatePlayerHitBtn(dashBoard) {
        const btnHit = document.createElement('button');
        btnHit.innerText = 'HIT';
        btnHit.classList.add('btn');
        dashBoard.append(btnHit);
        return btnHit
    }
    function CreateStandBtn(dashBoard) {
        const btnStand = document.createElement('button');
        btnStand.innerText = 'Stand';
        btnStand.classList.add('btn');
        dashBoard.append(btnStand);
        return btnStand
    }
    function CreateDashboard(table) {
        const dashBoard = document.createElement('div');
        dashBoard.classList.add('dashboard');
        //dashBoard.append(btnDeal);
        table.append(dashBoard)
        return dashBoard;

    }
    function CreateStatus(dashBoard) {
        const status = document.createElement('div');
        status.classList.add('message')
        status.innerText = 'Message for player'
        dashBoard.append(status)
        return status
    }
    function CreateTable(main) {
        const table = document.createElement('div');
        main.append(table)
        return table
    }
    function MainGame() {
        const main = document.querySelector('#game')
        console.log(main)
        main.textContent = 'hello world';
        return main
    }

    function createPlayerCash(dashBoard) {
        const playerCash = document.createElement('div');
        playerCash.classList.add('message');
        playerCash.innerText = 'players cash $100 !'
        return playerCash
    }
    function CreateInputBet(dashBoard){
        const inputBet = document.createElement('input');
        inputBet.setAttribute('type','number');
        inputBet.style.width = '4em';
        inputBet.style.fontSize = '1.5em';
        inputBet.style.marginTop = '1em';
        inputBet.value = 0;
        return inputBet
    }
    function CreateBetAmountBtn(dashBoard){
        const btnBetAmount = document.createElement('button')
        btnBetAmount.classList.add('btn')
        btnBetAmount.innerText = 'bet amount'
        return btnBetAmount
    }
    function createGameTwo() {
        const gameTwo = document.createElement('div');
        gameTwo.classList.add('message', 'debugger');
        return gameTwo
    }

    function createGameTwoElements(gameDiv) {
        console.log('gameDiv: ', gameDiv)
        gameDiv.append(createScoreboard());

        const table = CreateTable(gameDiv);
        table.innerText = 'table'
        
        const dealer = CreateDealerDiv();
        
        gameDiv.append(dealer);

        const dealerScore = CreateDealerScore(gameDiv);
        gameDiv.append(dealerScore);

        const dealerCards = CreateDealerCards(gameDiv);
        gameDiv.append(dealerCards);

        const Player = CreatePlayer(gameDiv);
        gameDiv.append(Player);

        const playerScore = CreateplayerScore(gameDiv);
        gameDiv.append(playerScore);

        const playerCards = CreatePlayerCards(gameDiv);
        gameDiv.append(playerCards);

        const dashBoard = CreateDashboard(gameDiv);
        gameDiv.append(dashBoard)
        const btnHit = CreatePlayerHitBtn(gameDiv);
        gameDiv.append(btnHit);

        const btnDeal = CreateDealerBtn(gameDiv);
        gameDiv.append(btnDeal);

        const btnStand = CreateStandBtn(gameDiv);
        gameDiv.append(btnStand);
        
        const playerCash = createPlayerCash(gameDiv);
        gameDiv.append(playerCash);
        
        const inputBet = CreateInputBet(gameDiv);
        gameDiv.append(inputBet);

        const btnBetAmount = CreateBetAmountBtn(gameDiv);
        gameDiv.append(btnBetAmount);
        
        
    }

   
    return {
        init: init
    }
}();