export default function handler(req, res) {
  const { query } = req;
  const user = query.user || 'Someone sneaky';

  const messages = [
    'has disappeared into the digital void.',
    'is lurking like a cat in the shadows.',
    'went AFK but is definitely still judging.',
    'is hiding behind their screen with popcorn.',
    'is on a secret mission to find the best memes.',
    'is silently plotting world domination.',
    'has temporarily turned into a ghost.',
    'is busy pretending to work but really lurking.',
    'is lurking so hard they forgot to breathe.',
    'vanished but left their Wi-Fi on.',
    'went ninja mode, no chat for you!',
    'is just here for the vibes, no talky.',
    'disappeared like your last motivation.',
    'lurking like a pro in the shadows of the chat.',
    'has entered stealth mode, be right back.',
    'is currently a chat phantom.',
    'has gone to make some coffee, BRB.',
    'just here silently judging your gameplay.'
  ];

  const message = `${user} ${messages[Math.floor(Math.random() * messages.length)]}`;
  res.status(200).send(message);
}
