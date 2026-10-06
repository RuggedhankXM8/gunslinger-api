export default function handler(req, res) {
  // Always set plain text header so Nightbot displays clean text
  res.setHeader('Content-Type', 'text/plain');

  // Extract parameters from query
  const { cmd, touser, user } = req.query;
  const targetUser = touser || user || 'Someone';

  // Determine requested command (defaults to 'southpark' if no ?cmd= parameter is passed)
  const command = (cmd || 'southpark').toLowerCase();

  switch (command) {
    case 'gooner':
      return handleGooner(targetUser, res);

    case 'southpark':
    case 'quote':
      return handleSouthPark(res);

    default:
      return res.status(400).send('Invalid command specified.');
  }
}

// -------------------------------------------------------------
// Command 1: DBZ Ki / Gooner Command
// -------------------------------------------------------------
function handleGooner(targetUser, res) {
  const roster = [
    { name: 'Yajirobe', weight: 20, minKi: 0, maxKi: 30 },
    { name: 'Yamcha', weight: 20, minKi: 31, maxKi: 45 },
    { name: 'Krillin', weight: 15, minKi: 46, maxKi: 60 },
    { name: 'Tien', weight: 15, minKi: 61, maxKi: 70 },
    { name: 'Piccolo', weight: 10, minKi: 71, maxKi: 80 },
    { name: 'Vegeta', weight: 8, minKi: 81, maxKi: 88 },
    { name: 'Super Saiyan', weight: 7, minKi: 89, maxKi: 94 },
    { name: 'Super Saiyan Blue', weight: 4, minKi: 95, maxKi: 98 },
    { name: 'Ultra Instinct', weight: 1, minKi: 99, maxKi: 100 }
  ];

  const totalWeight = roster.reduce((sum, char) => sum + char.weight, 0);
  let randomWeight = Math.random() * totalWeight;
  let selected = roster[0];

  for (const char of roster) {
    if (randomWeight < char.weight) {
      selected = char;
      break;
    }
    randomWeight -= char.weight;
  }

  const ki = Math.floor(Math.random() * (selected.maxKi - selected.minKi + 1)) + selected.minKi;
  const over9000 = ki >= 90 ? ' OVER 9000!' : '';

  return res.status(200).send(`${targetUser} is a ${selected.name} Gooner ${ki}% Ki${over9000}`);
}

// -------------------------------------------------------------
// Command 2: Your Existing South Park Quotes
// -------------------------------------------------------------
function handleSouthPark(res) {
  const lines = [
    "Screw you guys, I'm going home. — Cartman",
    "I'm not fat, I'm big-boned! — Cartman",
    "Oh my God, they killed Kenny! — Stan & Kyle",
    "Respect my authoritah! — Cartman",
    "Drugs are bad, mmmkay? — Mr. Mackey",
    "I learned something today... — Kyle",
    "Howdy ho! — Mr. Hankey",
    "I'm super! Thanks for asking! — Big Gay Al",
    "TIMMY! — Timmy",
    "I'm the Coon. — Cartman",
    "You will respect my authoritah! — Cartman",
    "They took our jobs! — Darryl Weathers",
    "I’m not just sure, I’m HIV positive. — Cartman",
    "Stan, don’t you know the first law of physics? Anything that's fun costs at least eight dollars. — Kyle",
    "You know, I think I’ve learned something today. — Kyle",
    "That's it, back to Winnipeg! — Terrance",
    "I'm not your buddy, guy. — Canadian Guy",
    "I'm not your guy, friend. — Canadian Friend",
    "I'm not your friend, buddy! — Canadian Buddy",
    "Suck my balls. — Cartman",
    "That’s it! I’m going to kill you all! — Cartman",
    "You know, people are gonna think you're a pervert. — Butters",
    "My name is not Craig, it's Mint-Berry Crunch! — Bradley",
    "You guys, seriously, you guys! — Kyle",
    "I’m going to make love to you woman, gonna lay you down by the fire. — Chef",
    "That’s a bad Mr. Kitty! No, no! That’s my pot pie! — Cartman",
    "I hate hippies! — Cartman",
    "This is going to be the best day ever! — Butters",
    "Everything I do is to protect you, Stan. — Randy",
    "We must stop ManBearPig. — Al Gore",
    "I’m not a conformist! — Henrietta (Goth Kid)",
    "You have to take the hardest thing, and just go with it. — Stan",
    "You're breaking my balls here, Sharon! — Randy",
    "Simpsons did it! — Butters",
    "This is America. I don't have to learn anything. — Cartman",
    "It's coming right for us! — Jimbo",
    "You kids want some cheesypoofs? — Cartman",
    "I love life. I love everything about life. — Butters",
    "I'm gonna be on television! — Towelie",
    "Let's fighting love! — Japanese Band",
    "Lemmiwinks, Lemmiwinks, journey through the dark... — Narrator",
    "You threw balls at my nanners! — Monkey News Anchor",
    "There are no stupid questions, just stupid people. — Mr. Garrison",
    "I'm gonna kick you square in the nuts! — Cartman",
    "Stan, I think I'm bi-curious. — Butters",
    "I don't want to do it if it hurts, okay?! — Cartman",
    "Don't be such a Jew, Kyle. — Cartman",
    "That’s what I do, I drink and I yell. — Randy",
    "I'm totally serial, you guys! — Al Gore",
    "Oh hamburgers... — Butters",
    "Wanna get high? — Towelie",
    "We didn’t listen... and now we’re sorry. — Kyle",
    "Do you have any idea what it’s like to be a girl in middle school? — Wendy",
    "You go to hell! You go to hell and you die! — Mr. Garrison",
    "I thought this was America! — Randy",
    "I'm not letting some stupid pandemic ruin Christmas. — Cartman",
    "Cartman, you fat piece of crap! — Kyle",
    "I’m a little piggy, here's my snout. — Cartman",
    "I’m totally not okay with this. — Stan",
    "There’s a time and a place for everything. And it’s called college. — Chef",
    "I got something in my front pocket for you. — Chef",
    "I wasn’t the one who didn’t say it first. — Stan",
    "God has sparkles. — Butters",
    "We must go now, our planet needs us. — Visitors (Aliens)",
    "Why don't you go back to San Francisco with the rest of the queers? — Cartman",
    "Stan Marsh, this is your life. — Narrator",
    "I’m just a boy... standing in front of a girl... asking her to love him. — Kyle (mocking)"
  ];

  const random = lines[Math.floor(Math.random() * lines.length)];
  return res.status(200).send(random);
}
