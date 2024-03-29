type Mods = Record<string, boolean | string>;

export function cn(cls: string, additional?: string[], mods?: Mods): string {
    const modsData = mods
        ? Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className)
        : [];
    const additionalData = additional ? additional.filter(Boolean) : [];
    return [cls, ...additionalData, ...modsData].join(' ');
}
