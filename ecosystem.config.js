module.exports = {
    apps : [{
        name      : 'yarn',
        script    : 'yarn',
        args      : 'dev',
        interpreter: '/bin/bash',
        env: {
            NODE_ENV: 'development'
        }
    }]
};