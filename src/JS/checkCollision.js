/**
 *
 * @param {{x:number, y:number, width: number, height: number}} rect1
 * @param {{x:number, y:number, width: number, height: number}} rect2
 * @returns Boolean
 */
const checkCollision = (rect1, rect2) => {
  const collideXOne = rect1.x < rect2.x + rect2.width;
  const collideXTwo = rect1.x + rect1.width > rect2.x;
  const collideYOne = rect1.y < rect2.y + rect2.height;
  const collideYTwo = rect1.height + rect1.y > rect2.y;
  const rectIsCollide =
    collideXOne && collideXTwo && collideYOne && collideYTwo;
  return rectIsCollide;
};

export default checkCollision;
