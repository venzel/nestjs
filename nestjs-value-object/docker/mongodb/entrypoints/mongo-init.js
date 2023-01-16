db = db.getSiblingDB('payment');

db.createUser({
    user: 'payment',
    pwd: 'payment',
    roles: [{ role: 'readWrite', db: 'reports' }],
});

db.reports.insertMany([
    {
        description: 'Reports 1',
        resolved: false,
    },
    {
        description: 'Reports 2',
        resolved: false,
    },
    {
        description: 'Reports 3',
        resolved: true,
    },
]);
