import { User } from './User';

export class UserResponse {
    success:Boolean = false;
    msg: String = "";
    data:User;
}