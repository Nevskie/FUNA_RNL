<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(GenderConntroller::class)->group(function(){
   Route::post('/storeGender', 'storeGender'); 
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
