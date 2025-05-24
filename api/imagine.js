export default function handler(req, res) {
  const lines = [
    "🌈 IMAGINATION 🌈 — Just like SpongeBob said, 'You can be a fry cook, a jellyfish, or even... a balloon!' 🎈🧽",
    "🐚 THE MAGIC CONCH SAYS... do nothing. ✨🧠",
    "🍔 Krabby Patty-powered daydreams activate! 🍟🌊",
    "🧠 Plankton's plan: Imagine the formula, then steal it! 🔬📋",
    "🦸 Mermaid Man: ‘IMAGINATION… AWAY!’ 💥⚡",
    "🛶 Floating down a river of jellyfish jam... 🌊🍓",
    "📺 Patrick says: 'The inner machinations of my mind are an enigma.' 🧃💭",
    "🎣 SpongeBob: 'I'm ready... for imaginary adventures!' 🎉",
    "🚀 You just imagined a rocket made of pickles. 🥒✨",
    "🎨 Bob Ross meets Bikini Bottom — happy little sponge clouds! 🌥️🖌️",
    "📦 You opened a box and out popped... imagination! 🎁🌈",
    "🌌 Spacefaring Squidward journeys across your mind. 🛸🎷",
    "🧽 'Firmly grasp it!' — your dreams, probably. 🤲💫",
    "🎤 Squilliam: 'Even my imagination is more talented.' 🎻💅",
    "🍕 You just imagined eating underwater pizza. It's soggy but delicious. 🫧🍕",
    "🐌 Gary just wrote a novel using only meows and pure imagination. 📖🐾",
    "🎆 SpongeBob’s brain is on fire with creativity... literally. 🔥🧠",
    "🌿 Sandy: 'Use your brain, not your brawn!' 🥋🌻",
    "🔍 Patrick tried to imagine a rock. It was just a rock. 🪨🤷",
    "🍒 Imagination smoothie: 1 part jellyfish jelly, 2 parts stardust 🧃🌟",
    "🌠 Squidward imagined a world without SpongeBob. He smiled. 💅🎨",
    "🛌 Dream like SpongeBob — and sleep in a pineapple. 🍍💤",
    "🎡 Welcome to the imagination fair! Ride the jelly coaster! 🎢🐙",
    "💀 DoodleBob just drew your destiny. It's weird. ✏️📜",
    "📡 Broadcasting imagination straight from Bikini Bottom 📺🧠",
    "🏝️ SpongeBob says: 'Imagination is the best vacation!' 🧳☀️",
    "🧊 Ice cream cone dreams melting into reality 🍦🫠",
    "🛸 Flying Dutchman says: 'Ye imagination be haunted!' ☠️👻",
    "💼 You imagined Squidward being happy. That’s illegal. 👔🚨",
    "🐟 Fish chorus: 'IMAGINATION… IMAGINATION…' 🎶🐠"
  ];

  const random = lines[Math.floor(Math.random() * lines.length)];
  res.status(200).send(random);
}
