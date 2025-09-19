"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../supabase/supabase.service");
let ComponentService = class ComponentService {
    constructor(supabase) {
        this.supabase = supabase;
        this.tableName = 'components';
    }
    async create(payload) {
        var _a;
        const client = this.supabase.getClient();
        const { data, error } = await client
            .from(this.tableName)
            .insert({ name: payload.name, code: payload.code, description: (_a = payload.description) !== null && _a !== void 0 ? _a : null })
            .select()
            .single();
        if (error) {
            throw error;
        }
        return data;
    }
    async findOneById(id) {
        const client = this.supabase.getClient();
        const { data, error } = await client
            .from(this.tableName)
            .select('*')
            .eq('id', id)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Component not found');
        }
        return data;
    }
    async update(id, payload) {
        const client = this.supabase.getClient();
        const { data, error } = await client
            .from(this.tableName)
            .update({ ...payload })
            .eq('id', id)
            .select()
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Component not found or update failed');
        }
        return data;
    }
};
exports.ComponentService = ComponentService;
exports.ComponentService = ComponentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], ComponentService);
//# sourceMappingURL=component.service.js.map