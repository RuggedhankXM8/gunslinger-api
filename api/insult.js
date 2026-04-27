export default function handler(req, res) {
  const { query } = req;
  
  // Clean up the name: remove @ if the user included it, then re-add it for the ping
  let target = query.user || 'Stranger';
  target = target.replace('@', '');

  const behaviors = [
    // Original Custom Additions
    'order pizza with an entire script of what they want and then dispute it',
    'use a wine glass for soda',
    'cut their steak diagonally from corner to corner',
    'spend 10 minutes setting up a solo dinner table',
    'read the ingredient list on a snack package aloud',
    'say "it\'s just my opinion" before launching into an hour-long explanation',
    'type with three fingers and claim it\'s efficient',
    'wear matching socks even when no one will see them',
    'fuss over making a perfect cup of tea like it\'s surgery',
    'blow on chips to make them crispy',
    'use a measuring cup for pouring water into a glass',
    'watch cooking videos while they\'re actually cooking dinner',
    'count their money out loud and say "I have $45.50"',
    'use a spreadsheet app to track their daily steps',
    'pack a separate outfit just in case of "emergencies"',
    'rehearse what they\'ll say before answering the phone',
    'spend 5 minutes choosing which side of the bed to sleep on',
    'call a slice of pizza "a meal"',

    // Whimsical/Soft/Drake-Style Vibes
    'clap when the airplane lands',
    'say "I guess it\'s free!" when an item doesn\'t scan at the store',
    'wear a snorkel in the bathtub',
    'point at a TV in a restaurant and ask "You seeing this?" to nobody',
    'wiggle their fingers at a tray of donuts and say "Don\'t mind if I do!"',
    'say "Easy tiger!" when someone accidentally bumps into them',
    'float in the air when they smell a delicious pie',
    'cover their eyes with their hands and say "Guess who?"',
    'run like a character in a cartoon when they\'re in a hurry',
    'say "Wait your turn, fellas!" to a plate of fries',
    'sleep with a nightcap and a handheld candle',
    
    // General NPC/Sitcom Vibes
    'call their headphones "cans"',
    'remind the teacher about the homework right before the bell rings',
    'use a rolling suitcase for a one-night stay',
    'blow on their soup like they’re trying to put out a forest fire',
    'stand up as soon as the plane touches the gate',
    'call their steak a "bad boy" before cutting into it',
    'wipe their hands on their knees after eating one potato chip',
    'look at their watch when they have no intention of leaving',
    'hold their belly when they laugh like Santa Claus',
    'type with just their index fingers',

    // New Gender-Neutral Additions
    'cancel a doctor appointment because they’re sick',
    'refuse to ride a rollercoaster because they’re taller than the "you must be this tall to ride" sign',
    'walk out of a strip club with more money than they came in with',
    'get locked in a motorcycle',
    'be 6\'4" tall on a warm day and 6\'3" on a cold day',
    'clean the whole house before the cleaning lady arrives',
    'wait for an Uber at a bus stop',
    'lick their finger before turning a page on an iPad',
    'find a dollar on the street and file it in their tax returns',
    'call you just to say "I can\'t talk right now"',
    'use a changing room to try on a hat',
    'obey traffic laws in Grand Theft Auto',
    'rent your car just to make fun of it',
    'bring 18 people to an 18+ movie',
    'use their turn signals on a racetrack',
    'say "Geeze Louise"',
    'open a bag of chips with scissors',
    'put Hot Cheetos in the fridge to cool them down',
    'lose the TV remote and say "If I was the remote, where would I be?" while searching',
    'flush a fart',
    'make animal noises when eating animal crackers',
    'carry a sack on a stick when running away from home',
    'slap their thigh and say "Gee Willikers"',
    'close the fridge with their hips',
    'ask the waiter how their day was'
  ];

  // Randomly select one behavior
  const randomBehavior = behaviors[Math.floor(Math.random() * behaviors.length)];

  // Construct the final message
  const message = `@${target} is the type of person to ${randomBehavior}.`;

  // Send the response back to Nightbot
  res.status(200).send(message);
}
