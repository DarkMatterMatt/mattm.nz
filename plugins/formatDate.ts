import Vue from "vue";

Vue.filter("formatDate", (dateStr: string) =>
    Intl.DateTimeFormat("en-NZ", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(new Date(dateStr))
);
