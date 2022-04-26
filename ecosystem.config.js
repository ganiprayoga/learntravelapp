module.exports = {
    apps: [
        {
            name: 'TravelApp',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                "PORT": 3000,
                "NODE_ENV": "development"
            },
            env_production: {
                "PORT": 80,
                "NODE_ENV": "production",
            }
        }
    ]
}