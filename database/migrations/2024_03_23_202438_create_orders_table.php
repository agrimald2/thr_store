<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('customer_id');
            $table->integer('address_id');
            $table->decimal('shipping_fee', 8, 2)->default(0);
            $table->text('additional_info')->nullable();
            $table->string('reference_code');
            $table->string('payment_status')->default('pending');
            $table->string('shipping_status')->default('pending');
            $table->string('order_status')->default('pending');
            $table->timestamp('payment_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
