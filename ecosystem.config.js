module.exports = {
    apps: [
        {
            name: 'TravelApp',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                "HOST": "0.0.0.0",
                "PORT": 3000,
                "NODE_ENV": "development"
            },
            env_production: {
                "HOST": "0.0.0.0",
                "PORT": 80,
                "NODE_ENV": "production",
            }
        }
    ]
}