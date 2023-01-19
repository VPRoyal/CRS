module.exports = {
    async rewrites() {
    return[
        {
            source:'/account/signin',
            destination:'/account/'
        },
        {
            source:'/account/signup',
            destination:'/account/'
        }
    ]
}
}