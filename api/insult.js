export default function handler(req, res) {
  const { query } = req;
  
  // Clean up the name: remove @ if the user included it, then re-add it for the ping
  let target = query.user || 'Stranger';
  target = target.replace('@', '');

  const behaviors = [
    // Original Additions
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
    'ask the waiter how their day was',
    // New Additions
    'say "ouch" when they bump into a table',
    'blow on their ice cream to cool it down',
    'apologize to the ATM when it declines their card',
    'knock on the fridge door before opening it',
    'put a seatbelt on their takeout food',
    'study for a blood test',
    'wave back at a pre-recorded video',
    'bring a life jacket to a car wash',
    'say "don\'t mind if I do" before taking a free sample',
    'whisper when reading a secret in a book',
    'clap when the airplane lands',
    'ask a mannequin if they work here',
    'iron their socks before wearing them',
    'turn down the car radio so they can see the street signs better',
    'say "well, that just happened" after dropping a pen',
    'lean forward in their chair to make their car go faster in a video game',
    'use a ruler in bed to see how long they slept',
    'unplug the microwave at 1 second just to feel like a bomb defuser',
    'look both ways before crossing a one-way street',
    'run alongside a shopping cart and ride it like a scooter in the parking lot',
    'read the terms and conditions out loud',
    'bring a spoon to the Super Bowl',
    'say "we need to talk" to their pet',
    'wear sunglasses to protect their eyes from the computer screen',
    'say "it’s a free country" after doing something completely normal',
    'ask the drive-thru speaker to repeat itself',
    'try to double-tap a physical photograph to like it',
    'put their hands on their hips and sigh when the toaster pops',
    'say "see you next year" on December 31st',
    'sort their M&Ms by alphabetical order'
  ];

  // Randomly select one behavior
  const randomBehavior = behaviors[Math.floor(Math.random() * behaviors.length)];

  // Construct the final message
  const message = `@${target} is the type of person to ${randomBehavior}.`;

  // Send the response back to Nightbot
  res.status(200).send(message);
}
