export default function handler(req, res) {
  const names = [
    "Ricochet Rick",
    "Six-Shot Susan",
    "Misfire Mike",
    "Cross-Eyed Cal",
    "Quickdraw Quinton",
    "Trigger Happy Tina",
    "Slamfire Sam",
    "\"Oops\" McGraw",
    "Deadeye Delilah",
    "Jammin’ Janet",
    "Recoil Ronnie",
    "Fumbles Fred",
    "Bangless Ben",
    "Coughin’ Carl",
    "No-Eyed Nancy",
    "Clickless Cassie",
    "Loudmouth Louie",
    "Busted Barrel Bob",
    "Shaky Trigger Steve",
    "Two-Shot Tanya",
    "Whiskey Bang Brenda",
    "Grimey Gracie",
    "Buckled Boots Barry",
    "Sidearm Sadie",
    "One-Shell Sheldon",
    "Cold Soup Sally",
    "Bootlick Bill",
    "Panic Pete",
    "Toothpick Tina",
    "The Ghost of Deadeye Gulch" // RARE
  ];

  const isRare = Math.random() < 0.05;
  const name = isRare
    ? names[names.length - 1]
    : names[Math.floor(Math.random() * (names.length - 1))];

  res.status(200).send(name);
}
