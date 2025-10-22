export default function handler(req, res) {
  // 1. Get the username from the URL query parameter 'user'
  //    Default to "Someone" if the parameter is missing.
  const user = req.query.user || "Someone";

  // 2. The list of all your quotes
  const quotes = [
    // --- HALO INFINITE ---
    "is going dark on Zeta Halo.",
    "has activated Active Camo and vanished from radar.",
    "is calibrating their Mjolnir armor in silence.",
    "is quietly observing from a Banshee above the battlefield.",
    "is lurking near the Forerunner ruins.",
    "is recharging shields in a hidden cave.",
    "is blending into the UNSC comms chatter.",
    "is watching Master Chief finish the fight — again.",
    "is perched on a Wasp, silent and steady.",
    "is scoping targets from the cliffs of Behemoth.",
    "has vanished like a cloaked Spartan.",
    "is somewhere between The Weapon’s code lines.",
    "is quietly hunting Banished patrols.",
    "is cleaning their BR75 for the next match.",
    "is camping in a Ghost, waiting for the right moment.",
    "is taking cover behind a plasma crate.",
    "is lurking in the shadows of Installation 07.",
    "has gone MIA — presumed active.",
    "is AFK but still on the radar.",
    "is doing recon for Fireteam Osiris.",

    // --- FORTNITE ---
    "is building a skybase where no one can find them.",
    "is hiding in a bush with a Legendary shotgun.",
    "is emoting behind enemy lines.",
    "just landed in Lazy Lagoon and went stealth.",
    "is chilling at Loot Lake, plotting.",
    "has gone radio silent — probably crafting a trap.",
    "is sniping from Tilted Towers unseen.",
    "is farming materials in complete silence.",
    "is crouched behind a wall, waiting for the storm to pass.",
    "is spectating from the shadows of the island.",
    "is taking a break at the Battle Bus diner.",
    "is looting quietly while everyone else fights.",
    "is disguised as an NPC to avoid attention.",
    "is vibing with Peely in secret.",
    "is ghosting through the Zero Point unnoticed.",
    "is aiming a suppressed SMG from the dark.",
    "is sneaking into Mega City undetected.",
    "has joined the island, but you’ll never see them coming.",
    "is lurking near the storm’s edge with perfect timing.",
    "is gone fishing mid-battle — a true Fortnite veteran.",

    // --- CALL OF DUTY: BLACK OPS 6 ---
    "has gone dark — mission classified.",
    "is deep behind enemy lines, radio silent.",
    "is waiting for their killstreak to recharge.",
    "is blending in like a true Black Ops operative.",
    "has disappeared into the shadows of the Cold War.",
    "is crawling through the ruins with a suppressed weapon.",
    "is decoding enemy transmissions off the grid.",
    "is lurking on the outskirts of Nuketown.",
    "is cleaning their XM4 in the dark.",
    "has vanished from radar — possible Ghost perk active.",
    "is watching the minimap and waiting for movement.",
    "is camping the objective — classic Black Ops tactics.",
    "is uploading intel to command, silently.",
    "is ghosted and cold-blooded — no pings, no traces.",
    "is waiting for exfil at the evac point.",
    "is lurking in the shadows of Verdansk reborn.",
    "is prepping a stealth takedown in the corridor.",
    "is watching the squad but saying nothing.",
    "has eyes on target, finger on the trigger.",
    "is in deep cover — mission continues."
  ];

  // 3. Pick a random quote
  const random = quotes[Math.floor(Math.random() * quotes.length)];

  // 4. Set the content type and send the final message (Username + Quote)
  res.setHeader('Content-Type', 'text/plain'); // Tells Nightbot to expect simple text
  res.status(200).send(`${user} ${random}`);
}
