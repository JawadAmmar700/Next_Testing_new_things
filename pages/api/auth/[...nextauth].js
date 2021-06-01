import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Facebook({
            clientId: 236231738264253,
            clientSecret: '95da8f9f9d144dea0adc6788dee40f2c'
           
        }),
        Providers.Google({
            clientId: '631721808685-bbjpo4lkp079m7t3ubqj5jh6jbt1i46o.apps.googleusercontent.com',
            clientSecret: 'xYQ9yPbzfteq3yrh84L6WS5P'
           
        }),
        // ...add more providers here
    ],

})