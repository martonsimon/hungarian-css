import { Plugin } from 'postcss';

interface HungarianCssOptions {
    // Add any options here if needed in the future
}

declare const hungarianCss: Plugin<HungarianCssOptions>;
hungarianCss.postcss = true;

export default hungarianCss;
export { hungarianCss }; 