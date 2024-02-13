import { persistentAtom } from "@nanostores/persistent";

const $theme = persistentAtom<string>("theme", "sunset");

export default $theme;
