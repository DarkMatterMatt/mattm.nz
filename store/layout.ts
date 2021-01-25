import { MutationTree } from "vuex";

export type LayoutState = ReturnType<typeof state>;

export const state = () => ({
    title: "",
});

export const mutations: MutationTree<LayoutState> = {
    updateTitle(state, newTitle: string) {
        state.title = newTitle;
    }
}
