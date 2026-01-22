import path from "path";
import { fileURLToPath } from "url";
import { registerJob } from "@evershop/evershop/lib/cronjob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function () {
  registerJob({
    name: "sampleJob",
    schedule: "*/1 * * * *", // Runs every minute
    resolve: path.resolve(__dirname, "crons", "everyMinute.js"),
    enabled: true,
  });
}
