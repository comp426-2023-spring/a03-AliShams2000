function getRandomElement(array){
	return array[Math.floor(Math.random() * array.length)];
}

// RPS Rules
const rpsRules = {
	"rock": ["paper"],
    	"paper": ["scissors"],
    	"scissors": ["rock"]
}

export function playRps(playerShot){
	const validShots = Object.keys(rpsRules);

	if(playerShot === undefined){
		playerShot = getRandomElement(validShots);
	} else if (!validShots.includes(playerShot)) {
		console.log(`Valid shots: ${validShots.join(", ")}`);
    		process.exit(1);
	}
	const opponentShot = getRandomElement(validShots);
  	const result = rpsRules[playerShot].includes(opponentShot) ? "win" : "lose";

  	return { player: playerShot, opponent: opponentShot, result };
}

// RPSLS game
const rpslsRules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

export function playRpsls(playerShot) {
  const validShots = Object.keys(rpslsRules);

  if (playerShot === undefined) {
    playerShot = getRandomElement(validShots);
  } else if (!validShots.includes(playerShot)) {
    console.log(`Valid shots: ${validShots.join(", ")}`);
    process.exit(1);
  }

  const opponentShot = getRandomElement(validShots);
  const result = rpslsRules[playerShot].includes(opponentShot) ? "win" : "lose";

  return { player: playerShot, opponent: opponentShot, result };
}






