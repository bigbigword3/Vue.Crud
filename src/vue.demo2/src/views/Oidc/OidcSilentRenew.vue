<template>
    
</template>
<script>
import { vuexOidcProcessSilentSignInCallback } from 'vuex-oidc'
import { oidcSettings } from '@/config/oidc'

vuexOidcProcessSilentSignInCallback(oidcSettings);
export default {
    
}
</script>