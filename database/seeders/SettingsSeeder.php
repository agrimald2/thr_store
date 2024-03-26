<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('settings')->insert([
            [
                'id' => 1,
                'name' => 'tc',
                'value' => '3.75',
            ],
            [
                'id' => 2,
                'name' => 'shipping_fee',
                'value' => '0',
            ],
            [
                'id' => 3,
                'name' => 'name',
                'value' => 'THR',
            ],
            [
                'id' => 4,
                'name' => 'logo_url',
                'value' => '/images/settings/1.png',
            ],
        ]);
    }
}
