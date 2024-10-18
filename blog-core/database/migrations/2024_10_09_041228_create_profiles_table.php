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
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string("firstname");
            $table->string("lastname")->nullable();
            $table->string("email")->nullable();
            $table->string("phonenumber")->nullable(); // Changed to string
            $table->date('date_of_birth')->nullable();
            $table->date('date')->nullable();
            $table->string("image")->nullable();
            $table->integer("age")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
