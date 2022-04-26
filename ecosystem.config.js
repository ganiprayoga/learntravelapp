module.exports = {
    apps: [
        {
            name: 'TravelApp',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}