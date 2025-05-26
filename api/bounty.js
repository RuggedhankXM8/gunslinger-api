export default function handler(req, res) {
  const { query } = req;
  const user = query.user || 'Stranger';

  const crimes = [
    // Fart Crimes
    'fartin’ so loud it spooked the horses',
    'blamin’ a fart on the deputy',
    'crop dustin’ the entire saloon',
    'rippin’ one mid-duel and throwin’ off the aim',
    'fartin’ during the mayor’s wedding',
    'launchin’ a fart and callin’ it “warning fire”',
    'gassin’ up the jail cell with no remorse',
    'fartin’ in Dutch’s tent and runnin’',
    'fartin’ on a sacred blanket',
    'causin’ a stampede with a bean-fueled blast',
    'fartin’ next to the preacher and blamin’ God',
    'accidentally ignitin’ a fart near dynamite',
    'leavin’ a silent one in the general store',
    'sittin’ in the saloon and rippin’ like a thunderclap',
    'fartin’ into a bounty poster tube',
    
    // Bad Singing Crimes
    'singin’ off-key at the gallows',
    'startin’ a bar fight with a yodel solo',
    'serenadin’ Micah without consent',
    'yodelin’ during a bank robbery',
    'tryin’ to sing Sadie to sleep (bad idea)',
    'singin’ love songs to a wanted poster',
    'breakin’ windows with your high notes',
    'performin’ “Rawhide” with a kazoo backup',
    'yowlin’ like a coyote in church',
    'leadin’ a saloon singalong no one asked for',
    'usin’ the sheriff’s megaphone for karaoke',
    'singin’ to your stew like it was a date',
    'doin’ a one-man opera in the bathhouse',
    'turnin’ the town square into a hootin’ concert',
    'writin’ outlaw ballads about yourself (bad ones)',

    // Burp Crimes
    'burpin’ the national anthem at the town hall',
    'causin’ a bar brawl with a chili-powered belch',
    'burpin’ at Sadie (she did not laugh)',
    'belchin’ into the mayor’s ear trumpet',
    'turnin’ a train robbery into a burpin’ contest',
    'burpin’ so loud the sheriff drew his gun',
    'burpin’ the word “O’Driscoll” by accident',
    'offendin’ the reverend with a stew burp',
    'burpin’ up a whole sausage on the poker table',
    'belchin’ into a harmonica for flair',
    'burpin’ in rhythm during the church hymn',
    'leadin’ the town parade with a series of burps',
    'burpin’ through an entire confession',
    'accidentally burpin’ in Micah’s stew',
    'scarin’ horses with thunder burps',

    // Overeating Crimes
    'eatin’ all the gang’s beans and denyin’ it',
    'snackin’ during a stagecoach heist',
    'stealin’ six pies from the preacher’s window',
    'passin’ out in a stew pot mid-robbery',
    'sneakin’ bites off the mayor’s dinner plate',
    'eatin’ an entire crate of biscuits before noon',
    'bein’ caught lickin’ the stew pot clean',
    'stealin’ candy from the general store and cryin’',
    'chokin’ on cornbread durin’ a standoff',
    'eatin’ evidence at a crime scene (was pie)',
    'hidin’ pickled eggs in your boot “for later”',
    'goin’ back for fourths at the church picnic',
    'holdin’ up a wagon for its lunch basket',
    'bein’ too full to flee the scene',
    'tradin’ dynamite for chili',

    // Original Crimes
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
