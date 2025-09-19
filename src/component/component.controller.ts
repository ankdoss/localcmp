import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ComponentService } from './component.service';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';

@Controller()
export class ComponentController {
	constructor(private readonly componentService: ComponentService) {}

	@Post('component')
	create(@Body() payload: CreateComponentDto) {
		return this.componentService.create(payload);
	}

	@Get('preview/:id')
	getOne(@Param('id') id: string) {
		return this.componentService.findOneById(id);
	}

	@Put('component/:id')
	update(@Param('id') id: string, @Body() payload: UpdateComponentDto) {
		return this.componentService.update(id, payload);
	}
} 