import { IsOptional, IsString } from 'class-validator';

export class UpdateComponentDto {
	@IsString()
	@IsOptional()
	name?: string;

	@IsString()
	@IsOptional()
	code?: string;

	@IsString()
	@IsOptional()
	description?: string;
} 