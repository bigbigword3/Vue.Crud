// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using System;
using System.Collections.Generic;
using System.Security.Claims;

namespace IdentityServer
{
    public static class Config
    {
        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
            {
                new TestUser
                {
                    SubjectId = "1",
                    Username = "admin",
                    Password = "admin",

                    Claims = new []
                    {
                        new Claim("name", "Alice"),
                        new Claim("website", "https://alice.com")
                    }
                }
            };
        }

        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };
        }

        public static IEnumerable<ApiResource> GetApis()
        {
            return new List<ApiResource>
            {
                new ApiResource("vue.api","vue.api")
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                // JavaScript Client
                new Client
                {
                    ClientId = "js",
                    ClientName = "JavaScript Client",
                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = false,
                    RequireClientSecret = false,
                    AllowAccessTokensViaBrowser=true,
                    AlwaysIncludeUserClaimsInIdToken=true,
                    AccessTokenLifetime=(int)TimeSpan.FromHours(2).TotalSeconds,
                    RefreshTokenUsage= TokenUsage.OneTimeOnly,
                    RedirectUris =           {
                        "http://localhost:8080/oidc-callback" ,
                        "http://localhost:8080/silent-renew-oidc",
                        "http://47.112.212.161:901/oidc-callback" ,
                        "http://47.112.212.161:901/silent-renew-oidc"
                    },
                    PostLogoutRedirectUris = {
                        "http://47.112.212.161:901/index",
                        "http://localhost:8080/index"
                    },
                    AllowedCorsOrigins =     {
                        "http://localhost:8080",
                        "http://47.112.212.161:901"
                    },
                    AllowOfflineAccess=true,
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                         IdentityServerConstants.StandardScopes.OfflineAccess,
                        "vue.api"
                    }

                },
                 new Client
                  {
                     ClientId = "vue.api.swaggerui",
                     ClientName = "vue.api.swaggerui",
                     AllowedGrantTypes = GrantTypes.Implicit,
                     AllowAccessTokensViaBrowser = true,
                     ClientSecrets =
                     {
                         new Secret("secret".Sha256())
                     },
                     AllowedScopes = {
                         IdentityServerConstants.StandardScopes.OpenId,
                         IdentityServerConstants.StandardScopes.Profile,
                         "vue.api"
                     },
                     RedirectUris = {
                         "http://localhost:5000/swagger/oauth2-redirect.html",
                         "http://47.112.212.161:901/swagger/oauth2-redirect.html",
                     },
                     RequireConsent=false,
                     AllowRememberConsent=true,
                     AllowOfflineAccess = true,
                     AlwaysIncludeUserClaimsInIdToken  = true

                 }
            };
        }
    }
}