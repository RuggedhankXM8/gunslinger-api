export default function handler(req, res) {
  const { query } = req;
  const user = query.user || 'Stranger';

  const ultraRareItems = [
    'a pristine emerald brooch',
    'a flawless diamond ring',
    'a gold bar (seriously)',
    'a rare coin from 1792',
    'a pocket watch engraved by J. Marston'
  ];

  const valuableItems = [
    'a gold tooth',
    'a silver locket',
    'an old wedding ring',
    'a rusty pocket watch',
    'a money clip with worn initials',
    'a silver chain with a broken clasp',
    'a Civil War bullet mold',
    'a brooch shaped like a horseshoe',
    'a cigar case with a faded crest',
    'a belt buckle with inlaid silver',
    'a pearl earring (just one)',
    'a bloodstone ring',
    'a pocket knife with a bone handle',
    'a sheriff’s star badge (still shiny)',
    'a silver comb',
    'a brass monocle',
    'a pair of cufflinks',
    'a decorative snuffbox',
    'a small tin of gold flakes',
    'a pair of engraved spurs',
    'a velvet pouch of old coins',
    'a compass that still works',
    'a miniature portrait in a locket',
    'a gold-plated toothpick',
    'a fine silk glove (intact)'
  ];

  const junkItems = [
    'a crushed harmonica',
    'a pair of old dentures',
    'a torn-up Bible page',
    'an empty whiskey flask',
    'a busted comb',
    'a bootlace tied in a knot',
    'a nail shaped like a fishhook',
    'a hatpin buried in the dirt',
    'a broken matchstick',
    'a cracked belt buckle',
    'a bottle cap (out of place)',
    'a rotted piece of rope',
    'a button with no holes',
    'a shard of broken lantern glass',
    'a boot heel',
    'a moldy page from a catalog',
    'a bullet casing filled with dirt',
    'a bent spoon',
    'a rusted fork',
    'a busted tin cup',
    'a scrap of leather with teeth marks',
    'a torn glove',
    'a broken boot spur',
    'a crushed tin of peppermints',
    'a flattened tin whistle'
  ];

  const places = [
    'behind the church',
    'under an old tree',
    'by a forgotten headstone',
    'near a crooked fence post',
    'beneath a faded cross',
    'beside a sunken grave',
    'in the overgrown corner',
    'next to a rusted shovel'
  ];

  const roll = Math.random();
  let item, tag;

  if (roll < 0.05) {
    item = ultraRareItems[Math.floor(Math.random() * ultraRareItems.length)];
    tag = '🌟 ultra rare';
  } else if (roll < 0.45) {
    item = valuableItems[Math.floor(Math.random() * valuableItems.length)];
    tag = '💰 valuable';
  } else {
    item = junkItems[Math.floor(Math.random() * junkItems.length)];
    tag = '🪙 worthless';
  }

  const place = places[Math.floor(Math.random() * places.length)];
  const message = `*${user} dug ${place} and found ${item} (${tag}).*`;

  res.status(200).send(message);
}
