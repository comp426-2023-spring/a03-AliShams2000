export {rps, rpsls}

// Rock Paper Scissors Game
function rps(player_action){
	const possible_moves = ['rock', 'paper', 'scissors'];
	const random = Math.floor(Math.random() * possible_moves.length);

	if(player_action === undefined){
		return{ player: possible_moves[random] };
	} else if(!possible_moves.includes(player_action.toLowerCase() )){
		console.error('Error: Player move is not legal! Only rock, paper, or scissors are available.')
		throw new RangeError();
	}else{
		const computer_action = possible_moves[random];
		let result;

		switch(player_action.toLowerCase() ){
			case 'rock':
				result = (computer_action === 'rock') ? 'tie':
					 (computer_action === 'paper') ? 'lose':
					 (computer_action === 'scissors') ? 'win';
				break;
			case 'paper':
				result = (computer_action === 'rock') ? 'win':
					 (computer_action === 'paper') ? 'tie':
					 (computer_action === 'scissors') ? 'lose';
				break;
			case 'scissors':
				result = (computer_action === 'rock') ? 'lose':
					 (computer_action === 'paper') ? 'win':
					 (computer_action === 'scissors') ? 'tie';
				break
		}
		return{
			player: player_action.toLowerCase(),
			opponent: computer_action,
			result: result
		};
	}
	
} // End of the Rock Paper Scissors Game.


// Rock Paper Scissors Lizard Spock
function rpsls(player_action){
	const possible_moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    	const random = Math.floor(Math.random() *  possible_moves.length);

    	if(player_action === undefined){
        	return{ player: possible_moves[random] };
   	 } else if (!possible_moves.includes(player_action.toLowerCase())){
       		console.error('Error: Player move is not legal! Only rock, paper, scissors, lizard, or spock are available.')
                throw new RangeError();
    	} else{
        	const computer_action = possible_moves[random];
        	let result;

		switch(player_action.toLowerCase() ){
			case 'rock':
                		result = (computer_action === 'rock') ? 'tie':
                         		 (computer_action === 'paper') ? 'lose':
					 (computer_action === 'scissors') ? 'win':
					 (computer_action === 'lizard') ? 'win':
					 (computer_action === 'spock') ? 'lose';
                		break;
            		case 'paper':
                		result = (computer_action === 'rock') ? 'win':
                         		 (computer_action === 'paper') ? 'tie':
					 (computer_action === 'scissors') ? 'lose':
					 (computer_action === 'lizard') ? 'lose':
					 (computer_action === 'spock') ? 'win';
				break;
			case 'scissors':
				result = (computer_action === 'rock') ? 'lose':
					 (computer_action === 'paper') ? 'win':
					 (computer_action === 'scissors') ? 'tie':
					 (computer_action === 'lizard') ? 'win':
					 (computer_action === 'spock') ? 'lose';
				break;
			case 'lizard':
				result = (computer_action === 'rock') ? 'lose':
					 (computer_action === 'paper') ? 'win':
					 (computer_action === 'scissors') ? 'lose':
					 (computer_action === 'lizard') ? 'tie':
					 (computer_action === 'spock') ? 'win';
				break;
			case 'spock':
				result = (computer_action === 'rock') ? 'win':
					 (computer_action === 'paper') ? 'lose':
					 (computer_action === 'scissors') ? 'win':
					 (computer_action === 'lizard') ? 'lose':
					 (computer_action === 'spock') ? 'win';
				break;
		}
		return{
			player: player_action.toLowerCase(),
			opponent: computer_action,
			result: result
		};
	}
} // End of the Rock Paper Scissors Lizard Spock Game.

					 
						
