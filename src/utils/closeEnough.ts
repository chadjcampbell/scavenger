//if x and y coordinates are less than 10% difference each return true

export const closeEnough = (
  coords1: { x: number; y: number },
  coords2: { x: number; y: number }
) => {
  const xIsClose =
    100 * Math.abs((coords1.x - coords2.x) / ((coords1.x + coords2.x) / 2)) < 10
      ? true
      : false;
  const yIsClose =
    100 * Math.abs((coords1.y - coords2.y) / ((coords1.y + coords2.y) / 2)) < 10
      ? true
      : false;
  return xIsClose && yIsClose;
};
