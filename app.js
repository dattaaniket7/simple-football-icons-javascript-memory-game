document.addEventListener('DOMContentLoaded', () => {
	//card options
	const cardArray = [
		{
			name: 'CristianoRonaldo',
			img: 'images/CR1.jpg'
		},
		{
			name: 'CristianoRonaldo',
			img: 'images/CR2.jpg'
		},
		{
			name: 'LionelMessi',
			img: 'images/LM1.jpg'
		},
		{
			name: 'LionelMessi',
			img: 'images/LM2.jpg'
		},
		{
			name: 'LuisSuarez',
			img: 'images/LS1.jpg'
		},
		{
			name: 'LuisSuarez',
			img: 'images/LS2.jpg'
		},
		{
			name: 'NeymarJr',
			img: 'images/N1.jpg'
		},
		{
			name: 'NeymarJr',
			img: 'images/N2.jpg'
		},
		{
			name: 'RobertLewandowski',
			img: 'images/RL1.jpg'
		},
		{
			name: 'RobertLewandowski',
			img: 'images/RL2.jpg'
		},
		{
			name: 'ZlatanIbrahimovic',
			img: 'images/ZI1.jpg'
		},
		{
			name: 'ZlatanIbrahimovic',
			img: 'images/ZI2.jpg'
		}
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	var cardsChosen = [];
	var cardsChosenId = [];
	var cardsWon = [];

	//create board

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src', 'images/soccer-ball-goal.jpg');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	//check for matches

	function checkForMatch() {
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if (cardsChosen[0] === cardsChosen[1]) {
			alert('You found a match');
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/soccer-ball-goal.jpg');
			cards[optionTwoId].setAttribute('src', 'images/soccer-ball-goal.jpg');
			alert('Sorry, try again');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2) {
			resultDisplay.textContent = ' Contratulations! You found them all!';
		}
	}

	//flip card
	function flipCard() {
		console.log(this);
		var cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		console.log(this);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
