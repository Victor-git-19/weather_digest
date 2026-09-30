import { parseArgs } from "./cli/parseArgs.js";

const args = process.argv.slice(2);

try {
    const options = parseArgs(args);

    console.log(options);
} catch (error) {
    console.error(`Ошибка: ${error.message}`);
    process.exit(1);
}
