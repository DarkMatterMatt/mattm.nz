import colors from "vuetify/es5/util/colors";

const { HOSTNAME } = process.env;
if (HOSTNAME == null) {
    throw new Error("HOSTNAME is not defined");
}

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s | Matt Moran",
        meta: [
            { hid: "charset", charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/css/default",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "@/plugins/formatDate.ts",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
        // https://go.nuxtjs.dev/vuetify
        "@nuxtjs/vuetify",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        ["@nuxtjs/robots", { sitemap: `${HOSTNAME}/sitemap.xml` }],
        "@/modules/sitemapRouteGenerator",
        // https://go.nuxtjs.dev/pwa
        "@nuxtjs/pwa",
        "@nuxt/content",
        "@nuxtjs/sitemap",
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: "en",
        },
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        breakpoint: {
            mobileBreakpoint: "sm",
        },
        customVariables: ["~/assets/variables.scss"],
        theme: {
            dark: true,
            options: {
                customProperties: true,
            },
            themes: {
                dark: {
                    primary: "#fff",
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend (config) {
            config.module.rules.push({
                test: /\.md$/i,
                loader: "ignore-loader",
            });
        },
    },

    server: {
        host: "0.0.0.0",
    },

    hooks: {
        "content:file:beforeParse": (file) => {
            if (file.extension === ".md") {
                // convert self-closing tags to not self-closing tags
                file.data = file.data.replace(/<\s*([^\s>]+)([^>]*)\/>/g, "<$1$2></$1>");
            }
        },
    },

    sitemap: {
        hostname: HOSTNAME,
        trailingSlash: true,
    },

    content: {
        markdown: {
            prism: {
                theme: "prism-themes/themes/prism-vsc-dark-plus.css",
            },
        },
    },
};
