export function getRandomCitySlugs(slugs, currentSlug, limit = 4) {
  return slugs
    .filter((item) => item.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}
