import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  user: {}
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  user: state => state.user,
}
