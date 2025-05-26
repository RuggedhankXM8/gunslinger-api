const lastPanTimes = {};

export default function handler(req, res) {
  const { query } = req;
  const user = query.user || 'Stranger';
  const now = Date.now();

  // 5-second cooldown
  if (lastPanTimes[user] && now - lastPanTimes[user] < 5000) {
    const waitTime = Math.ceil((5000 - (now - lastPanTimes[user])) / 1000);
    return res
      .status(200)
      .send(`Easy, ${user}! Wait ${waitTime} more sec to pan again.`);
  }

  lastPanTimes[user] = now;

  const goldFinds = [
    'a fat gold nugget',
    'a tiny fleck of gold',
    'a gold tooth from a saloon brawl',
    'a golden button off Dutch’s coat',
    'a shiny rock (ain’t gold)',
    'a bullet casing dipped in gold',
    'a crusty gold earring',
    'a busted locket with a gold lining',
    'a full gold bar (probably fell off a wagon)',
    'a gold ring engraved “Micah ❤️ Micah”'
  ];

  const trashFinds = [
    'a busted spittoon',
    'a moldy boot with beans inside',
    'a bar of soap that smells like beans',
    'a soggy hat from a riverboat gambler',
    'a broken sheriff’s badge',
    'a wanted poster with your name spelled wrong',
    'a half-eaten biscuit',
    'a harmonica that only plays sad notes',
    'a tin can labeled “definitely not cursed”',
    'a raccoon’s love note addressed to “Belinda”'
  ];

  const critterFinds = [
    'a frog that looked offended',
    'a crawdad with a bad attitude',
    'a fish that spit in your pan',
    'a possum pretending to be gold',
    'a raccoon guarding a peanut',
    'a goose with a tiny sheriff’s badge',
    'a leech that made eye contact',
    'an owl feather covered in dust',
    'a snake that winked at you',
    'a squirrel holdin’ a wedding ring'
  ];

  const rareFinds = [
    'a stash list that just says “beans, dynamite, mustache wax”',
    'a ring that buzzes near Micah',
    'a gold coin stamped with a gang logo no one recognizes',
    'a note that says: “Don’t tell Dutch.”',
    'a compass that always points to the nearest saloon',
    'a map fragment that smells like stew and regret',
    'a lockbox key labeled “definitely not for treasure”',
    'a monocle with the initials “B.V.”',
    'a piece of Dutch’s plan labeled “Part 17: Distract Arthur”',
    'an ancient treasure map scribbled on bark'
  ];

  const luckLevel = Math.floor(Math.random() * 5) + 1;
  const luckRating = '⭐'.repeat(luckLevel);
  const roll = Math.random();

  let message = '';

  if (roll < 0.1) {
    const rare = rareFinds[Math.floor(Math.random() * rareFinds.length)];
    message = `${user} uncovered ${rare}! Luck: ${luckRating}`;
  } else {
    // Choose two different categories
    const categories = [goldFinds, trashFinds, critterFinds];
    const shuffled = categories.sort(() => 0.5 - Math.random());
    const item1 = shuffled[0][Math.floor(Math.random() * shuffled[0].length)];
    const item2 = shuffled[1][Math.floor(Math.random() * shuffled[1].length)];

    message = `${user} found ${item1} and ${item2}. Luck: ${luckRating}`;
  }

  res.status(200).send(message);
}
