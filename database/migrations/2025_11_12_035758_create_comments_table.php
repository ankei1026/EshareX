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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            
            // Foreign key to posts (assuming comments are mainly for posts)
            $table->unsignedBigInteger('post_id');
            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
            
            // Optional: if you want comments on tags as well, but typically you'd choose one
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            
            // For nested comments (reply functionality)
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->foreign('parent_id')->references('id')->on('comments')->onDelete('cascade');
            
            // Comment content and author info
            $table->string('name');
            $table->string('email');
            $table->text('content'); // Fixed: removed space, changed to text for longer content
            $table->enum('sentiment', ['positive', 'neutral', 'negative'])->nullable();
            $table->decimal('toxicity_score', 4, 3)->nullable(); // Fixed: correct decimal syntax
            $table->boolean('is_approved')->default(false); // Usually default to false for moderation
            $table->timestamps();
            
            // Optional: Add indexes for better performance
            $table->index('post_id');
            $table->index('parent_id');
            $table->index('is_approved');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};