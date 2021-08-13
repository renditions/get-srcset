export type Rendition = {
  src: string;
  width: number;
};

export const sortRenditions = (renditions: Rendition[]) => {
  renditions.forEach((r) => {
    if (typeof r.width === "string") {
      r.width = parseInt(r.width, 10);
    }
  });

  renditions.sort((a, b) => a.width - b.width);

  return renditions;
};

const getSrcset = (renditions: Rendition[]) =>
  renditions.map(({ src, width }) => `${src} ${width}w`).join(",");

const getSortedSrcset = (renditions: Rendition[], sort = false) => {
  if (!sort) {
    return getSrcset(renditions);
  }

  const renditionsCopy = [...renditions];

  const sortedRenditions = sortRenditions(renditionsCopy);

  return getSrcset(sortedRenditions);
};

export default getSortedSrcset;
