module.exports = {
    async rewrites() {
    return[
        {
            source:'/account/signin',
            destination:'/account/'
        },
        {
            source:'/account/create',
            destination:'/account/registration'
        },
        {
            source:'/account/signup',
            destination:'/account/registration/'
        }
    ]
}
}