import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEmail, IsNotEmpty, Length } from "class-validator";  // class validation için kurduğumuz kütüphane
import { GroupModel } from "tools/models/group.model";
import { RoleModel } from "tools/models/role.model";

export class UserCreateDto{
    @IsNotEmpty()   // class validation
    @Length(2, 20)
    @ApiProperty()
    name: string;
    @ApiProperty()
    surname: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    image: string;
    @IsEmail()
    @ApiProperty()
    email: string;
    @ApiProperty()
    @IsDateString()
    birthDay: Date;
}

export class UserUpdateDto{
    @ApiProperty()
    name: string;
    @ApiProperty()
    surname: string;
    @ApiProperty()
    image: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    birthDay: Date;
    @ApiProperty()
    roles: RoleModel[];
    @ApiProperty()
    groups: GroupModel[];
}

export class UserLoginDto{
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}