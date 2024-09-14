import { IsString } from "class-validator";

export class CreateRingDto {
    @IsString()
    readonly name: string;
}
