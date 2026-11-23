/**
 * Embeds `generated/payload.gz` in the compiled binary.
 *
 * Imported only dynamically by `payload.ts` when the code runs from the
 * compiled executable, so `bun run` works before the bundle exists.
 */
import bundle from "../../generated/payload.gz" with { type: "file" };

export default bundle;
