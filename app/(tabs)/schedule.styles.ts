import { C, S, styles as indexStyles } from "./index.styles";

export { C, S };

// Re-export the index styles as scheduleStyles so existing imports continue working
export const scheduleStyles = indexStyles;

export default scheduleStyles;
