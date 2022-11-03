export default function () {
    this.nuxt.hook("generate:done", (context) => {
        const routesToExclude = [];
        this.nuxt.options.sitemap.routes = [...context.generatedRoutes]
            .filter(route => !routesToExclude.includes(route));
    });
}
