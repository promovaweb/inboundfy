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

import { createDashboardScreen } from "./dashboard.ts";
import { createArchiveScreen } from "./archive.ts";
import { createChannelsScreen } from "./channels.ts";
import { createCalendarScreen } from "./calendar.ts";

const factories = [createDashboardScreen, createArchiveScreen, createChannelsScreen, createCalendarScreen];
const projectTabs = factories.map(create => ({ ...create(), create }));

export const screens: readonly Screen[] = [...projectTabs, overviewScreen, settingsScreen, credentialsScreen, docsScreen, aboutScreen];


/** Allocate project navigation and loading state for this renderer. */
export function createScreens(): Screen[] {
  return screens.map(screen => projectTabs.find(tab => tab.id === screen.id)?.create() ?? screen);
}
