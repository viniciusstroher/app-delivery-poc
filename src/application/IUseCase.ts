export interface IUseCase{
  execute (request?: IRequest) : Promise<IResponse> | IResponse;
}

//usado para interface base de Request de UC
export interface IRequest{}

//usado para interface base de Response de UC
export interface IResponse{}
