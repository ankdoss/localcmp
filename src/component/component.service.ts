import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';

export interface ComponentEntity {
	id: string;
	name: string;
	code: string;
	description?: string | null;
	created_at: string;
	updated_at: string;
}

@Injectable()
export class ComponentService {
	private readonly tableName = 'components';

	constructor(private readonly supabase: SupabaseService) {}

	async create(payload: CreateComponentDto): Promise<ComponentEntity> {
		const client = this.supabase.getClient();
		const { data, error } = await client
			.from(this.tableName)
			.insert({ name: payload.name, code: payload.code, description: payload.description ?? null })
			.select()
			.single();
		if (error) {
			throw error;
		}
		return data as ComponentEntity;
	}

	async findOneById(id: string): Promise<ComponentEntity> {
		const client = this.supabase.getClient();
		const { data, error } = await client
			.from(this.tableName)
			.select('*')
			.eq('id', id)
			.single();
		if (error || !data) {
			throw new NotFoundException('Component not found');
		}
		return data as ComponentEntity;
	}

	async update(id: string, payload: UpdateComponentDto): Promise<ComponentEntity> {
		const client = this.supabase.getClient();
		const { data, error } = await client
			.from(this.tableName)
			.update({ ...payload })
			.eq('id', id)
			.select()
			.single();
		if (error || !data) {
			throw new NotFoundException('Component not found or update failed');
		}
		return data as ComponentEntity;
	}
} 