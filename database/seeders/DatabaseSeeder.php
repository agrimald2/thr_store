<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed categories
        $this->call(CategoriesSeeder::class);

        // Seed products
        $this->call(ProductsSeeder::class);

        // Seed settings
        $this->call(SettingsSeeder::class);
    }
}
