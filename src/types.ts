export interface IListRequest{
  readonly id:string;
  readonly title: String;
  readonly explane: String;
  readonly pay: Number;
  readonly videoUrl: String;
  readonly downloadUrl: String;
  readonly setting: TSetting;
  readonly owner: TUser;
  readonly keepUser: TUser[];
}
export interface IGraphqlList<T>{
  readonly listRequests:{
    readonly items:T[];
  }
}
type TSetting = {
  readonly length: String;
  readonly ratio: String;
  readonly tag: String[];
  readonly subtitle: Number;
}
type TUser = {
  id: String;
}