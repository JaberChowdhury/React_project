import { useSelector } from "react-redux";

interface stateType {
  theme: { isDark: boolean };
}
const result = useSelector((state: stateType) => state.theme.isDark);

export const hodai = {
  what: result,
};
