import { SequelizeOrm } from "../db/config/SequilzeOrm";
import { AuthRoutes } from '../routes/auth/AuthRoutes'
import { UserRoutes } from "../routes/user/UserRoutes"
import { UserController } from "../routes/user/UserController"
import { AuthController } from "../routes/auth/AuthController";
import { UserRepository } from "../db/repositories/UserRepository"

let userRepository =
  new UserRepository(
    new SequelizeOrm()
  );

let userController =
  new UserController(
    userRepository
  );

let authController =
  new AuthController(
    userRepository
  );
  
export let depedencies =
  [
    new AuthRoutes(
      authController
    ),
    new UserRoutes(
      userController
    )
  ]
