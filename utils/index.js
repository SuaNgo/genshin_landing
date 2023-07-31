export const fetchCharsImage = (char) => {
  let newName = "";
  switch (char) {
    case "Kaedehara Kazuha":
      newName = "kazuha";
      break;
    case "Kamisato Ayaka":
      newName = "ayaka";
      break;
    case "Kujou Sara":
      newName = "sara";
      break;
    case "Raiden Shogun":
      newName = "raiden";
      break;
    case "Traveler":
      newName = "traveler-anemo";
      break;
    case "Sangonomiya Kokomi":
      newName = "kokomi";
      break;
    default:
      newName = char.toLowerCase().replace(/\s+/g, "-");
      break;
  }

  let url = `https://api.genshin.dev/characters/${newName}/card`;

  return `${url}`;
};

export const fetchCharsData = async (filters) => {
  const { character, weapon, rarity, element } = filters;
  const charDatas = await (
    await fetch(`https://api.genshin.dev/characters/`)
  ).json();
  if (character) {
    const datas = await (
      await fetch(`https://api.genshin.dev/characters/${character}`)
    ).json();
    return datas;
  } else {
    const datas = Promise.all(
      charDatas.map(
        async (data) =>
          await (
            await fetch(`https://api.genshin.dev/characters/${data}`)
          ).json()
      )
    );
    return datas;
  }
};

export const updateSearchParams = (type, value) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};
