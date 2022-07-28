import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators"
import store from ".."

export interface IAppState {
  msg: string
}

@Module({ dynamic: true, store, name: 'app' })
class AppInfo extends VuexModule implements IAppState{
  public msg = ''

  @Mutation
  private SET_MSG(msg: string){
    this.msg = msg
  }

  @Action
  public setMsg(msg: string){
    this.SET_MSG(msg)
  }
}

export const AppModule = getModule(AppInfo)