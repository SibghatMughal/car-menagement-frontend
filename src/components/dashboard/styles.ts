import { COLORS } from "../../theme";
import { createStyles } from "../../utils";

export const styles = createStyles({
  titleText: {
    textAlign: "center",
    marginBottom: "20px",
  },
  cardStyle: {
    width: "300px",
    textAlign: "center",
    fontSize: "x-large",
    color: COLORS.GRAY,
    boxShadow: `0px 1px 5px ${COLORS.GRAY}`,
  },
  wrap: {
    padding: "50px",
  },
});
