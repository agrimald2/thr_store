<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'doc_type',
        'doc_number',
        'products_details',
        'amount',
        'incidentDate',
        'details',
        'complaint',
        'files',
    ];
}
