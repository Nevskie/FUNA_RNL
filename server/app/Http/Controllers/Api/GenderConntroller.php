<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Gender;

class GenderConntroller extends Controller
{
    public function loadGenders () {
        $genders = Gender::all();
        return response() ->json([
            'genders' => $genders
        ], 200);
    }
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
