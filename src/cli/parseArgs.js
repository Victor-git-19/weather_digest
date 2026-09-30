export function parseArgs(args) {
    const cityIndex = args.indexOf("--city");

    if (cityIndex === -1) {
        throw new Error("Параметр --city обязателен.");
    }

    const city = args[cityIndex + 1];

    if (!city || city.startsWith("--")) {
        throw new Error("После --city нужно указать название города.");
    }

    const cities = city.split(",").map((item) => item.trim());

    if (cities.some((item) => !item)) {
        throw new Error("Список городов содержит пустое значение.");
    }

    const daysIndex = args.indexOf("--days");
    let days = 3;

    if (daysIndex !== -1) {
        const daysValue = args[daysIndex + 1];

        if (!daysValue || daysValue.startsWith("--")) {
            throw new Error("После --days нужно указать количество дней.");
        }

        days = Number(daysValue);

        if (!Number.isInteger(days) || days < 1 || days > 7) {
            throw new Error("--days должен быть целым числом от 1 до 7.");
        }
    }

    const noCache = args.includes("--no-cache");

    return {
        cities,
        days,
        noCache
    };
}
