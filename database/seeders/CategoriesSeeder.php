<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            [
                'id' => 1,
                'name' => 'Surface and Underground',
                'description' => 'drilling alternative spare parts',
                'image_url' => '/images/categories/1.jpg',
                'active' => true,
            ],
            [
                'id' => 2,
                'name' => 'Mine pump',
                'description' => 'spare parts equipment',
                'image_url' => '/images/categories/2.jpg',
                'active' => true,
            ],
            [
                'id' => 3,
                'name' => 'Other',
                'description' => 'Other parts and equipments',
                'image_url' => '/images/categories/3.jpg',
                'active' => true,
            ],
        ]);
    }
}
