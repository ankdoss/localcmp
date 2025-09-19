import { ComponentService } from './component.service';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
export declare class ComponentController {
    private readonly componentService;
    constructor(componentService: ComponentService);
    create(payload: CreateComponentDto): Promise<import("./component.service").ComponentEntity>;
    getOne(id: string): Promise<import("./component.service").ComponentEntity>;
    update(id: string, payload: UpdateComponentDto): Promise<import("./component.service").ComponentEntity>;
}
