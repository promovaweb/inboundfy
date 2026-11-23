import { spacing } from "../src/tui/spacing.ts";
/** Configurable screen context fixture without the application shell. */
import type { CliRenderer } from "@opentui/core";
import type { ChooseOptions, ConfirmOptions, Layout, PromptOptions, ScreenContext } from "../src/tui/screen.ts";
import { themes } from "../src/tui/theme.ts";
import { iconSets } from "../src/tui/icons.ts";

/** Creates a screen context recording messages and delegating dialog responses. */
export function createScreenContext(renderer: CliRenderer, layout: Layout = "medium") {
  const notifications: Array<[string, string | undefined]> = [];
  const statuses: string[] = [];
  const prompts: PromptOptions[] = [];
  const confirmations: ConfirmOptions[] = [];
  const choices: ChooseOptions[] = [];
  const answers = {
    prompt: async (_options: PromptOptions): Promise<string | undefined> => undefined,
    confirm: async (_options: ConfirmOptions): Promise<boolean> => false,
    choose: async (_options: ChooseOptions): Promise<number | undefined> => undefined,
  };
  let refreshes = 0;
  const ctx: ScreenContext = {
    renderer, theme: themes.night, icons: iconSets.unicode, layout: () => layout, space: spacing(layout), motion: false,
    goTo: () => {}, refresh: () => { refreshes++; }, quit: () => {},
    notify: (message, tone) => { notifications.push([message, tone]); }, status: (text) => { statuses.push(text); },
    prompt: async (options) => { prompts.push(options); return answers.prompt(options); },
    confirm: async (options) => { confirmations.push(options); return answers.confirm(options); },
    choose: async (options) => { choices.push(options); return answers.choose(options); },
  };
  return { ctx, answers, notifications, statuses, prompts, confirmations, choices, refreshes: () => refreshes };
}
