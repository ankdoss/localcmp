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
export declare class ComponentService {
    private readonly supabase;
    private readonly tableName;
    constructor(supabase: SupabaseService);
    create(payload: CreateComponentDto): Promise<ComponentEntity>;
    findOneById(id: string): Promise<ComponentEntity>;
    update(id: string, payload: UpdateComponentDto): Promise<ComponentEntity>;
}
