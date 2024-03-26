<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'address_id',
        'shipping_fee',
        'additional_info',
        'reference_code',
        'payment_status',
        'shipping_status',
        'order_status',
        'payment_date',
    ];

    /**
     * PAYMENT_STATUS
     *  pending
     *  payed
     *  refunded
     *  
     * SHIPPING_STATUS
     *  pending
     *  sent
     * 
     * ORDER_STATUS
     *  pending
     *  completed
    */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function products()
    {
        return $this->hasMany(OrderProduct::class);
    }
}