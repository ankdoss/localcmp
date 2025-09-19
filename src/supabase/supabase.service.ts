import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService implements OnModuleInit {
	private client!: SupabaseClient;

	constructor(private readonly config: ConfigService) {}

	onModuleInit() {
		const url = this.config.get<string>('SUPABASE_URL');
		const anonKey = this.config.get<string>('SUPABASE_ANON_KEY');
		if (!url || !anonKey) {
			throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY');
		}
		this.client = createClient(url, anonKey);
	}

	getClient(): SupabaseClient {
		return this.client;
	}
} 