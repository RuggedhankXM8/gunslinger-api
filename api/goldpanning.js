if (roll < 0.1) {
  const rare = rareFinds[Math.floor(Math.random() * rareFinds.length)];
  message = `${user} uncovered ${rare}! Luck: ${luckRating}`;
} else {
  // Pick two distinct categories
  const categories = [goldFinds, trashFinds, critterFinds];
  const firstCategory = categories.splice(Math.floor(Math.random() * categories.length), 1)[0];
  const secondCategory = categories[Math.floor(Math.random() * categories.length)];

  const item1 = firstCategory[Math.floor(Math.random() * firstCategory.length)];
  const item2 = secondCategory[Math.floor(Math.random() * secondCategory.length)];

  message = `${user} found ${item1} and ${item2}. Luck: ${luckRating}`;
}
