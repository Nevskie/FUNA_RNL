<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GenderConntroller extends Controller
{
    public function StoreGender(Request $request) {
        $validated = $request->validate([
            'gender'=> ['request', 'min:4', 'max:10']
        ]);

        Gender::create([
            'gender' => $validated['gender']

        ]);

        return response() ->json([
            'message' => 'Gender Successfully added.'
        ], 200);
    }
}
