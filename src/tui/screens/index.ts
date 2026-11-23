/**
 * TUI screen registry, in tab order.
 * To add a tab: create `screens/<id>.ts` and append it here.
 */
import { aboutScreen } from "./about.ts";
import { overviewScreen } from "./overview.ts";
import { settingsScreen } from "./settings.ts";
import { credentialsScreen } from "./credentials.ts";
import { docsScreen } from "./docs.ts";
import type { Screen } from "../screen.ts";

export const screens: readonly Screen[] = [overviewScreen, settingsScreen, credentialsScreen, docsScreen, aboutScreen];
