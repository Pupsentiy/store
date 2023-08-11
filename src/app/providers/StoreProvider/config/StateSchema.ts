import { UserShema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
  user: UserShema;
  loginForm: LoginSchema;
}
