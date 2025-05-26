const lastPanTimes = {};

export default function handler(req, res) {
  const { query } = req;
  const user = query.user || 'Stranger';
  const now = Date.now();

  // Cooldown: 5 seconds
  if (lastPanTimes[user] && now - lastPanTimes[user] < 5000) {
    const waitTime = Math.ceil((5000 - (now - lastPanTimes[user])) / 1000);
    return res
      .status(200)
      .send(`Easy, ${user}! Wait ${waitTime} more sec to pan again.`);
  }

  lastPanTimes[user] = now;

  // Gold items (valuable)
  const goldFinds = [
    'a full gold bar (probably fell off a wagon)',
    'a fat gold nugget',
    'a golden button off Dutch’s coat',
    'a bullet casing dipped in gold',
    'a busted locket with a gold lining',
    'a crusty gold earring from a saloon floor',
    'a shiny nugget you *know* is real this time',
    'a gold tooth from a brawl',
    'a spur trimmed in gold',
    'a gold ring with initials you don’t recognize'
  ];

  // Trash items (just funny junk)
  const trashFinds = [
    'a bar of soap that smells like beans',
    'a moldy boot with chili still in it',
    'a wanted poster with your face upside down',
    'a tin can labeled “not cursed (probably)”',
    'a raccoon’s diary (very emotional)',
    'a busted harmonica that only plays “sad cowboy”',
    'a half-eaten biscuit from 1892',
    'a spittoon... but pocket-sized',
    'a letter from Dutch that just says “Plan”',
    'a boot full of regret'
  ];

  // Rare finds (10% chance)
  const rareFinds = [
    'a stash list that just says “beans, dynamite, mustache wax”',
    'a faded map marked “X?”',
    'a gold coin stamped with a gang symbol',
    'a monocle with “B.V.” etched inside',
    'a sheriff’s badge with a bullet hole',
    'a treasure clue: “Look where the creek bends twice”',
    'a fancy revolver grip, no gun attached',
    'a lockbox key labeled “mine now”',
    'a ring that smells like whiskey and fire',
    'a compass that always points toward town'
  ];

  const luckLevel = Math.floor(Math.random() * 5) + 1;
  const luckRating = '⭐'.repeat(luckLevel);

  // 10% chance for rare
  const roll = Math.random();
  let message = '';

  if (roll < 0.1) {
    const rare = rareFinds[Math.floor(Math.random() * rareFinds.length)];
    message = `${user} uncovered ${rare}! Luck: ${luckRating}`;
  } else {
    const gold = goldFinds[Math.floor(Math.random() * goldFinds.length)];
    const trash = trashFinds[Math.floor(Math.random() * trashFinds.length)];
    message = `${user} found ${gold} and ${trash}. Luck: ${luckRating}`;
  }

  res.status(200).send(message);
}
