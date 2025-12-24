import Link from "next/link";
import { citySlugs } from "@/data/citySlugs";
import { getRandomCitySlugs } from "@/utils/getRandomCitySlugs";

export default function CityInternalLinks({
  city,
  currentSlug,
}) {
  const allCityPages = citySlugs[city] || [];
  const randomLinks = getRandomCitySlugs(
    allCityPages,
    currentSlug,
    4
  );

  if (!randomLinks.length) return null;

  return (
    <section className="mt-12 border-t pt-8">
      <h3 className="text-1xl font-semibold mb-4">
        Related Pages in {city.charAt(0).toUpperCase() + city.slice(1)}
      </h3>

      <ul className="grid sm:grid-cols-4 gap-3">
        {randomLinks.map((item) => (
          <li key={item.slug}>
            <Link
              href={item.slug}
              className="text-blue-800 text-1xl hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
