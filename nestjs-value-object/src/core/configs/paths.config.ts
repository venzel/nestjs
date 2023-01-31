const pathsConfig = {
    payments: {
        path: 'payments',
        findOne: ':id',
        deleteOne: ':id',
    },
    users: {
        path: 'users',
        findOne: ':id',
        deleteOne: ':id',
    },
};

export { pathsConfig };
