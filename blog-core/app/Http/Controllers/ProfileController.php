<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{

    public function show($id)                           //this method will return a single blog
    {
        $profile = Profile::find($id);

        if ($profile == null) {
            return response()->json([
                'status' => false,
                'message' => 'Profile noy found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $profile
        ]);
    }

    public function index()
    {
        $profiles = Profile::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $profiles
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required|string|max:255',
            // 'lastname' => 'required|string|max:255',
            // 'email' => 'required|email|unique:,email',
            // 'phonenumber' => 'required|numeric|digits:10',
            // 'date_of_birth' => 'required|date',
            // 'date' => 'required|date',
            // 'image' => 'nullable|string',
            // 'age' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Create the user if validation passes
        $profile = new Profile();
        $profile->firstname = $request->firstname;
        $profile->lastname = $request->lastname;
        $profile->email = $request->email;
        $profile->phonenumber = $request->phonenumber;
        $profile->date_of_birth = $request->date_of_birth;
        $profile->date = $request->date;
        $profile->image = $request->image;
        $profile->age = $request->age;

        // Save the Profile instance to the database
        $profile->save();

        return response()->json([
            'message' => 'User created successfully',
            "data" => $profile
        ]);
    }

    public function update($id, Request $request)
    {
        $profile = Profile::find($id);

        if ($profile == null) {
            return response()->json([
                'status' => false,
                'message' => 'Profile noy found'
            ]);
        }

        $validator = Validator::make($request->all(), [
            'firstname' => 'required|string|max:255',
            // 'lastname' => 'required|string|max:255',
            // 'email' => 'required|email|unique:,email',
            // 'phonenumber' => 'required|numeric|digits:10',
            // 'date_of_birth' => 'required|date',
            // 'date' => 'required|date',
            // 'image' => 'nullable|string',
            // 'age' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $profile->firstname = $request->firstname;
        $profile->lastname = $request->lastname;
        $profile->email = $request->email;
        $profile->phonenumber = $request->phonenumber;
        $profile->date_of_birth = $request->date_of_birth;
        $profile->date = $request->date;
        $profile->image = $request->image;
        $profile->age = $request->age;

        // Save the Profile instance to the database
        $profile->save();

        return response()->json([
            'message' => 'User Updated successfully',
            "data" => $profile
        ]);
    }

    public function destroy($id)
    {
        $profile  = Profile::find($id);

        if ($profile == null) {
            return response()->json([
                'status' => false,
                'message' => 'Profile noy found'
            ]);
        }

        $profile->delete();

        return response()->json([
            'status' => 'true',
            'message' => 'User Deleted successfully'
        ]);
    }
}
