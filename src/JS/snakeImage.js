import bodyBottomLeft from "./../images/body_bottom_left.png";
import bodyBottomRight from "./../images/body_bottom_right.png";
import bodyHorizontal from "./../images/body_horizontal.png";
import bodyTopLeft from "./../images/body_top_left.png";
import bodyTopRight from "./../images/body_top_right.png";
import bodyVertical from "./../images/body_vertical.png";
import headDown from "./../images/head_down.png";
import headLeft from "./../images/head_left.png";
import headRight from "./../images/head_right.png";
import headUp from "./../images/head_up.png";
import tailDown from "./../images/tail_down.png";
import tailLeft from "./../images/tail_left.png";
import tailRight from "./../images/tail_right.png";
import tailUp from "./../images/tail_up.png";

const snakeImage = {
  body: {
    bottom: {
      right: bodyBottomRight,
      left: bodyBottomLeft,
    },
    horizontal: bodyHorizontal,
    top: {
      right: bodyTopRight,
      left: bodyTopLeft,
    },
    vertical: bodyVertical,
  },
  head: {
    right: headRight,
    left: headLeft,
    up: headUp,
    down: headDown,
  },
  tail: {
    right: tailRight,
    left: tailLeft,
    up: tailUp,
    down: tailDown,
  },
};

export default snakeImage;
