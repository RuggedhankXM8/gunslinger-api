export default function handler(req, res) {
  const { query } = req;
  
  // Clean up the name: remove @ if the user included it, then re-add it for the ping
  let target = query.user || 'Stranger';
  target = target.replace('@', '');

  const behaviors = [
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
