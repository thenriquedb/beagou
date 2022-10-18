import { Request, Response } from "express";
import { container } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(
    request: Request<void, void, ICreateUserDTO>,
    response: Response
  ) {
    const { email, name, password, roleId, phoneNumber } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      email,
      name,
      password,
      roleId,
      phoneNumber,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };