export interface IParamsConfirm {
  title: string;
  description: string;
  textButtonYes: string;
  textButtonNot: string;
  actionYes(): any | Promise<any>;
  actionNot(): any | Promise<any>; 
}