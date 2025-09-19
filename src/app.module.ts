import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from './supabase/supabase.module';
import { ComponentModule } from './component/component.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		SupabaseModule,
		ComponentModule,
	],
})
export class AppModule {} 