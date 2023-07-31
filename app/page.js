import { Character, SearchBar, CustomFilter, CharCard } from "@/components";
import { elements, rarity, typesOfWeapon } from "@/constants";
import { fetchCharsData } from "@/utils";

export default async function Home({ searchParams }) {
  //const char = await fetchChar({ character: searchParams.character });
  const datas = await fetchCharsData({
    character: searchParams.character,
  });

  const isDataEmpty = !Array.isArray(datas) || datas.length < 1 || !datas;

  return (
    <main className="overflow-hidden">
      <Character />

      <div className="mt-12 padding-x padding-y max-width" id="collection">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">All Character</h1>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="element" options={elements} />
            <CustomFilter title="weapon" options={typesOfWeapon} />
            <CustomFilter title="rarity" options={rarity} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__characters-wrapper">
              {datas?.map((data, index) => (
                <CharCard key={index} char={data.name} data={data} />
              ))}
            </div>
          </section>
        ) : (
          <section>
            <div className="home__characters-wrapper">
              <CharCard char={datas.name} data={datas} />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
