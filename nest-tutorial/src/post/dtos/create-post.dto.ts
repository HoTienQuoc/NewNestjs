import { IsNotEmpty } from "class-validator";

export class CreatePostDto{
    @IsNotEmpty()
    title: String;
    @IsNotEmpty()
    description: String;
}