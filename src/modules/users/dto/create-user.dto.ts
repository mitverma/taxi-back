export class CreateUserDto {
    id: String;
    firstName: String;
    lastName: String;
    email: string;
    contactNo: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    isActive?: boolean;
}
