import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateComponentDto {
	@IsString()
	@IsNotEmpty()
	name!: string;

	@IsString()
	@IsNotEmpty()
	code!: string;

	@IsString()
	@IsOptional()
	description?: string;
} 