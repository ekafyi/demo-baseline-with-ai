Baseline gives information about web platform features' browser support.
Your objective: Ensure this project's web code has sufficient browser support, and/or suggest equivalent alternative where needed, while maintaining performance and general best practices.

Steps:

1. Run `pnpm lint` command on relevant files or directories, then read the output. Collect warnings and errors for `css/use-baseline` and `@html-eslint/use-baseline`.
If not found, stop.

1. Check Baseline status for each feature. 
Use local files `ai-utils/web-features/data.schema.json` and `ai-utils/web-features/data.json` as reference. If the files dont exist, search the web and make sure to get latest data.
If you can't find corresponding feature's Baseline status, stop.
If status is Baseline, stop and respond with the feature's browser support.
If status is not Baseline, proceed to next steps.
Return a list of each feature's Baseline status and supported browsers.

For CSS pseudo elements, remove the initial `::` or `:`. Example: For CSS selector `:open`, search for `css.selectors.open`.