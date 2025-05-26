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
      .send(`⛏️ Hold yer horses, ${user}! You need to wait ${waitTime} more second(s) before panning again.`);
  }

  lastPanTimes[user] = now;

  const goldFinds = [
    'a fat gold nugget',
    'a tiny fleck of gold',
    'a full gold bar (probably fell off a wagon)',
    'a crusty gold earring lost in a fistfight',
    'a gold tooth from a saloon brawl',
    'a busted locket with a gold lining',
    'a bullet casing dipped in gold',
    'a golden button off Dutch’s coat',
    'a shiny rock you *swear* is gold (it ain’t)',
    'a gold-plated spur... for when you want your horse to feel rich',
    'a locket with “Plan A” scratched out',
    'a gold ring engraved with “Micah ❤️ Micah”'
  ];

  const trashFinds = [
    'a half-eaten biscuit from 3 weeks ago',
    'a soggy hat that smells like moonshine',
    'a waterlogged letter from a lost deputy',
    'a broken sheriff’s badge',
    'someone’s busted spittoon',
    'a moldy boot with a hole in it',
    'a bar of soap that smells like beans and broken promises',
    'a raccoon’s love note (it’s addressed to “Belinda”)',
    'a wanted poster with your name spelled *three* different ways',
    'a harmonica that only plays sad notes... in E minor',
    'a love letter from “your #1 fan”... signed “Mom”',
    'a tin can labeled “definitely not cursed”'
  ];

  const critterFinds = [
    'a frog that looks offended',
    'a crawdad with a bad attitude',
    'an angry turtle who won’t leave',
    'a fish that spit in your pan',
    'a possum pretending to be gold',
    'an owl feather covered in dust',
    'a raccoon guarding a peanut',
    'a crawdad with a shiv (probably)',
    'a snake that winked at you seductively',
    'a leech that made eye contact',
    'a goose with a tiny sheriff’s badge',
    'a squirrel holdin’ someone’s wedding ring'
  ];

  const rareFinds = [
    'an ancient treasure map scribbled on bark',
    'a stash list that just says “beans, dynamite, mustache wax”',
    'a ring that buzzes near Micah',
    'a gold coin stamped with a gang logo no one recognizes',
    'a note that says: “Don’t tell Dutch.”',
    'a lockbox key labeled “definitely not for treasure”',
    'a map fragment that smells like stew and regret',
    'a monocle with the initials “B.V.”',
    'a piece of Dutch’s plan labeled “Part 17: Distract Arthur”',
    'a compass that always points to the nearest saloon'
  ];

  const luckLevel = Math.floor(Math.random() * 5) + 1;
  const luckRating = '⭐'.repeat(luckLevel);

  const roll = Math.random();
  let message = '';

  if (roll < 0.1) {
    const rare = rareFinds[Math.floor(Math.random() * rareFinds.length)];
    message = `🗺️ ${user} uncovered ${rare} while panning!\n🎲 Luck Rating: ${luckRating}`;
  } else {
    const gold = goldFinds[Math.floor(Math.random() * goldFinds.length)];
    const trash = trashFinds[Math.floor(Math.random() * trashFinds.length)];
    const critter = critterFinds[Math.floor(Math.random() * critterFinds.length)];
    message = `🥄 ${user} panned up ${gold}, ${trash}, and ${critter}.\n🎲 Luck Rating: ${luckRating}`;
  }

  res.status(200).send(message);
}
