let baseRoutes = {
    name: 'Bob and Bridget',
    other_names: 'Billy and Mandy',
    register: function(server, options, next) {
        console.log(options)
        server.route({
            method: 'GET',
            path: '/',
            handler: function() {
                return baseRoutes
            }
        })
    }
}

baseRoutes.register.attributes = {
    name: 'base-routes',
    version: '1.0.0'
}

module.exports = baseRoutes