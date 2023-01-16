const { env } = process;

export default () => ({
    TYPEORM_HOST: env.TYPEORM_HOST || 'localhost',
    TYPEORM_PORT: parseInt(env.TYPEORM_PORT, 10) || 5434,
    TYPEORM_DB_NAME: env.TYPEORM_DB_NAME || 'payment',
    TYPEORM_USER: env.TYPEORM_USER || 'payment',
    TYPEORM_PASSWORD: env.TYPEORM_PASSWORD || 'payment',
});
