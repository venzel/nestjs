import { randomUUID } from 'node:crypto';

type Strategy = 'UUID' | 'MONGO' | 'RANDOM' | 'HASH';

interface StrategyMap {
    UUID: Function;
    MONGO: Function;
    RANDOM: Function;
    HASH: Function;
}

const randomId = () => {
    const min = 1,
        max = 10000000;

    const random = (min + Math.floor((max - min) * Math.random())).toString();

    const timestamp = Date.now().toString();

    return random + timestamp;
};

export const generateId = (strategy: Strategy = 'HASH') => {
    const map: StrategyMap = {
        UUID: () => randomUUID(),
        MONGO: () => randomUUID(),
        RANDOM: () => randomId(),
        HASH: () => randomUUID().split('-')[0],
    };

    const exists = map.hasOwnProperty(strategy);

    return exists ? map[strategy]() : map.HASH();
};
