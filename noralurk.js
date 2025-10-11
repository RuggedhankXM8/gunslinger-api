export default function handler(req, res) {
  // Retrieve username (from Nightbot query)
  const user = req.query.user || "A Spartan";

  // 50 Halo Infinite–themed lurk lines
  const messages = [
    "is dropping into Zeta Halo... quietly.",
    "has activated stealth like a Spartan on the battlefield.",
    "is riding a Warthog around the ring, unseen.",
    "has gone MIA like a Banished patrol.",
    "is cloaked and scanning from a Ghost.",
    "is hiding behind a Scorpion tank, silently.",
    "has joined the fight but remains camouflaged.",
    "is camping with a sniper on Fragmentation.",
    "is holding the line at Foundation, unseen.",
    "has gone invisible like a well-timed Active Camo pickup.",
    "is silently charging a Gravity Hammer.",
    "is plotting in the control room like Atriox himself.",
    "is circling the ring in a Banshee, engine off.",
    "is laying low like a Spartan on a recon mission.",
    "is lurking in the Forerunner structures, scanning for enemies.",
    "has entered stealth mode like a Hayabusa Spartan.",
    "is silently boarding a Pelican, ready for action.",
    "is hiding in the mist near Banished territory.",
    "is perched on a Forerunner spire, watching from above.",
    "is camping behind power seeds on Deadlock.",
    "has vanished like a hidden Skull collectible.",
    "is crouched with a BR75, eyes on chat.",
    "is charging up a Plasma Pistol in the shadows.",
    "is lurking behind a Gravity Lift, unseen.",
    "is quietly calibrating their AI companion.",
    "is adjusting their Mjolnir armor in the shadows.",
    "has gone radio silent... for now.",
    "is lurking on the ring’s outer edge, waiting.",
    "is listening to the Weapon’s calm voice... silently.",
    "is lurking like a lone wolf Spartan.",
    "is crouched in the corner of Bazaar, unseen.",
    "is silently holding a Shock Rifle.",
    "has disappeared like a data pad in the campaign.",
    "is piloting a Wasp quietly above chat.",
    "has engaged stealth protocols.",
    "is waiting for the Overshield spawn… quietly.",
    "is watching from the shadows of Highpower.",
    "is holding a Needler under the radar.",
    "has hidden their presence from Cortana’s gaze.",
    "is blending into the battlefield like a true Spartan.",
    "is lurking behind a destroyed Warthog.",
    "is hiding in the shadows near the Weapon’s signal.",
    "has gone dark on comms — mission ongoing.",
    "is standing guard in silence at the Tower.",
    "is patrolling the outskirts of Zeta Halo.",
    "is lurking near the Weapon’s uplink terminal.",
    "is crouched behind a Fusion Coil, silent but deadly.",
    "is watching the stars from a Pelican window.",
    "is waiting in silence for Master Chief’s signal.",
    "is sneaking through a Forerunner vault unseen.",
    "is hidden among fallen Spartans... watching."
  ];

  // Pick a random message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Return as JSON
  res.status(200).json({ message: `${user} ${randomMessage}` });
}
