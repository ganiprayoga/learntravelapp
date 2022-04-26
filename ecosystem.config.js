module.exports = {
    apps: [
        {
            name: 'TravelApps',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
};