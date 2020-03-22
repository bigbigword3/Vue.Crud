export const oidcSettings = {
    authority: process.env.AUTHORITY,
    clientId: 'js',
    redirectUri: process.env.CURRENT_WEB+'/oidc-callback',
    post_logout_redirect_uri:process.env.CURRENT_WEB+'/index',
    responseType: 'code',
    scope: 'openid profile offline_access vue.api',
    silentRedirectUri:process.env.CURRENT_WEB+ '/oidc-silent-renew',
    automaticSilentRenew: true, // If true oidc-client will try to renew your token when it is about to expire
    automaticSilentSignin: true // If true vuex-oidc will try to silently signin unauthenticated users on public routes. Defaults to true
}