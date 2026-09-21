export default function handler(req, res) {
  const lines = [
    "🚨 SUS ALERT: Questionable phrasing detected. That statement is 100% owned by the speaker and 0% endorsed by the streamer, mods, or anyone with a PR team. 🚨",
    "🚨 PAUSE PROTOCOL: Whatever you think you heard is the sole responsibility of the person who chose to word it like that. 🚨",
    "🚨 AYO PROTOCOL INITIATED: Any statement that makes chat collectively type 'AYO??' is the intellectual property of the speaker alone. 🚨",
    "🚨 OFF-THE-WALL ADVISORY: That take has left the wall, the building, and any reasonable context. Not affiliated with the streamer or mods. 🚨",
    "🚨 UNHINGED COMMENTARY DETECTED: This opinion has become unmoored from reality and does not reflect the views of anyone else on screen. 🚨",
    "🚨 VIEWER ADVISORY: That sentence sounded sus the first time and does not get better on replay. 🚨",
    "🚨 CLIP-AT-YOUR-OWN-RISK: Any statement that sounds worse at 0.5x speed is the property of the guest and the guest alone. 🚨",
    "🚨 FBI AGENT DISCLAIMER: The FBI agent assigned to this stream would like to clarify he does not know this guest. 🚨",
    "🚨 HR DEPARTMENT NOTICE: That phrasing would not survive an HR review and was definitely not approved by stream management. 🚨",
    "🚨 BROADCAST NOTICE: Certified 'my brother WHAT are you saying' moment. Sole responsibility of the speaker. 🚨",
    "🚨 SUSPECT WORDING ALERT: Chat's automatic pause detector has been triggered. The streamer wishes to be excluded from this narrative. 🚨",
    "🚨 OFF THE RAILS PROTOCOL: We have officially left the tracks. The views expressed beyond this point do not reflect the streamer, sponsors, or GPS. 🚨",
    "🚨 LEGAL NOTICE: Any accidental self-report contained in that statement belongs entirely to the person who volunteered it. 🚨",
    "🚨 PUBLIC NOTICE: If that sounded diabolical, that's because the wording was diabolical. Not endorsed by anyone else here. 🚨",
    "🚨 CHAT COURT DISCLAIMER: That statement will be clipped, slowed down, and used as evidence in the Court of Public Chat. 🚨",
    "🚨 VIEWER CAUTION: Contains traces of unfiltered thoughts, zero filter, and saying the quiet part loud. 🚨",
    "🚨 ADVISORY: The streamer heard that too and would like to formally distance themselves from it in real time. 🚨",
    "🚨 NOTICE: That comment is now the speaker's entire lore. It does not reflect the streamer, mods, or common sense. 🚨",
    "🚨 PAUSE. FULL STOP. The way that was worded is a you problem, not a we problem. 🚨",
    "🚨 UNHINGED-O-METER: 📈 This statement is no longer eligible for fact-checking, only vibe-checking. 🚨",
    "🚨 DISCLAIMER: If you have to ask 'is that allowed to be said?' - no, and it's not our fault it was. 🚨",
    "🚨 VIEWER WARNING: Side effects of that statement include chat saying 'NAURR' and mods pretending they didn't hear it. 🚨",
    "🚨 OFFICIAL STATEMENT: We have no idea why they said it like that either. 🚨",
    "🚨 SUS LEVEL: Maximum. That sentence had no business being constructed that way. 🚨",
    "🚨 BROADCAST ADVISORY: That take is so far off the wall it's in the neighbor's yard. Not endorsed by this channel. 🚨"
  ];

  const random = lines[Math.floor(Math.random() * lines.length)];
  res.status(200).send(random);
}
