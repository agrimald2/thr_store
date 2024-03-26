<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;

class StoreController extends Controller
{
    public function getStoreProductsAndCategories()
    {

        $categories = Category::where('active', true)
        ->get(['id', 'name', 'description', 'image_url']);

        $products = Product::where('active', true)
            ->with(['category' => function ($query) {
                $query->select('id', 'name');
            }])
            ->get(['id', 'category_id', 'name', 'description', 'image_url', 'price']);

        // Add the category name to each product
        $products->each(function ($product) {
            if ($product->category) {
                $product->category_name = $product->category->name;
            }
        });

        return response()->json([
            'categories' => $categories,
            'products' => $products,
        ]);

    }
}