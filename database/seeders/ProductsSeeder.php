<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*
        DB::table('products')->insert([
            [
                'id' => 1,
                'name' => 'Product One',
                'category_id' => 1,
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum nulla. Proin non nunc vitae tortor volutpat luctus et non augue',
                'image_url' => '/images/products/1.jpg',
                'price' => 100.00,
                'active' => true,
            ],
            [
                'id' => 2,
                'name' => 'Product Two',
                'category_id' => 1,
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum nulla. Proin non nunc vitae tortor volutpat luctus et non augue',
                'image_url' => '/images/products/2.jpg',
                'price' => 200.00,
                'active' => true,
            ],
        ]);
        */
    }
}


