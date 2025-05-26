export default function handler(req, res) {
  const { query } = req;
  const user = query.user || 'Stranger';

  const crimes = [
    'moonshinin’ with a raccoon sidekick',
    'ridin’ a donkey through a funeral',
    'stealin’ beans one can at a time',
    'givin’ Dutch bad plan advice',
    'startin’ a bar fight over a sandwich',
    'makin’ owl noises at the mayor',
    'sellin’ snake oil that’s just water',
    'borrowin’ a horse permanently',
    'tippin’ cows for sport',
    'slappin’ someone with a trout',
    'hollerin’ “O’Driscoll!” in a library',
    'duelin’ a chicken at high noon',
    'cheatin’ at dominoes with ghost cards',
    'throwin’ beans at Micah',
    'boot-scootin’ on sacred ground',
    'rustlin’ imaginary cattle',
    'wearin’ socks with spurs',
    'robbin’ a lemonade stand',
    'startin’ a tumbleweed race during a sermon',
    'holdin’ a burpin’ contest in Valentine',
    'crashin’ a stagecoach into a pie stand',
    'pretendin’ to be Arthur’s twin',
    'talkin’ back to Sadie (bad idea)',
    'huggin’ the wrong outlaw',
    'impersonatin’ Dutch and yellin’ about plans',
    'throwin’ your boots at the deputy',
    'fiddlin’ at 3 a.m. real loud-like',
    'paintin’ a mustache on the sheriff’s wanted poster',
    'drunkenly serenadin’ horses',
    'sellin’ fake treasure maps',
    'stealin’ dynamite to light cigars',
    'train robbin’... for snacks',
    'ridin’ backwards through town yellin’ “I’m the law!”',
    'startin’ a brawl over potato stew',
    'insultin’ a horse’s hat',
    'writin’ bad poetry on barn doors',
    'moonwalkin’ in church boots',
    'paintin’ Dutch’s mustache pink while he slept',
    'puttin’ chili in the saloon spittoon',
    'yellin’ “Yeehaw!” during a eulogy',
    'pretendin’ to be a tree for 3 hours',
    'challengin’ a mule to poker',
    'burstin’ into song mid-heist',
    'drinkin’ the whole town’s coffee rations',
    'throwin’ a pie at the mayor’s horse',
    'replacin’ all the whiskey with prune juice',
    'puttin’ googly eyes on the taxidermy',
    'flirtin’ with the undertaker',
    'claimin’ to be “The Chosen One” at the general store',
    'doin’ shadow puppets during a robbery'
  ];

  const towns = [
    'Valentine', 'Rhodes', 'Saint Denis', 'Strawberry', 'Blackwater', 'Annesburg',
    'Armadillo', 'Tumbleweed', 'a questionable shack', 'the outhouse district',
    'a haunted saloon', 'behind the general store', 'in Dutch’s dreams',
    'at the edge of the map', 'somewhere that wasn’t even on the map'
  ];

  const gangs = [
    'the Hole in the Hat Gang',
    'the Dry Gulch Guzzlers',
    'the High Noon Nappers',
    'the Deadeye Dandies',
    'the Boot Scoot Bandits',
    'the Rattlesnake Rascals',
    'the Dynamite Denture Crew',
    'the Whiskey Creek Weirdos',
    'the Chili-Stained Cowboys',
    'the Six-Shooter Sock Puppets',
    'the Buzzard’s Breakfast Club',
    'the Unshaven & Unforgiven',
    'the Yellin’ Yodelers',
    'the No-Horse Posse',
    'the Bronco Breakin’ Bakers',
    'the Last Beans on Earth',
    'the Pecos Pickle Patrol',
    'the Saddlebag Symphony',
    'the Cold Coffee Cartel',
    'the Salty Spitoon Regulators'
  ];

  const amount = Math.floor(Math.random() * 951) + 50;
  const crime = crimes[Math.floor(Math.random() * crimes.length)];
  const town = towns[Math.floor(Math.random() * towns.length)];
  const gang = gangs[Math.floor(Math.random() * gangs.length)];
  const stars = '⭐'.repeat(Math.floor(Math.random() * 5) + 1);

  const message = `${user} has a $${amount} bounty for ${crime} in ${town}. Gang: ${gang}. ${stars}`;

  res.status(200).send(message);
}
