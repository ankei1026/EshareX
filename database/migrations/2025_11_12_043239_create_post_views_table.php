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
        Schema::create('post_views', function (Blueprint $table) {
            $table->id();

            // Foreign key to posts
            $table->unsignedBigInteger('post_id');
            $table->foreign('post_id')->references('id')->on('posts')->constrained()->onDelete('cascade');

            // Optional foreign key to users (nullable for anonymous views)
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            // IP address (supports IPv6 - max 45 characters)
            $table->string('ip_address', 45);

            // Browser/device information
            $table->string('user_agent', 255)->nullable();

            // Custom timestamp for when the view occurred
            $table->dateTime('viewed_at');

            $table->timestamps();

            // Indexes for better performance
            $table->index('post_id');
            $table->index('user_id');
            $table->index('viewed_at');
            $table->index(['post_id', 'viewed_at']); // Composite index for popular posts queries
            $table->index(['ip_address', 'post_id']); // For duplicate view detection
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_views');
    }
};
