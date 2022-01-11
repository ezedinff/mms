export  interface NotifyHeader{
  description : string;
  document_attachment : string;
}

export  interface NotifyDetail{
  name : string;
  type : string;
  quantity : number;
  parentId : number;
}
