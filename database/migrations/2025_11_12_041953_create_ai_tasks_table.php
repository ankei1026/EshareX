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
        Schema::create('ai_tasks', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['summarization', 'tagging', 'recommendation', 'moderation', 'generation']);
            $table->longText('input_data')->nullable();
            $table->enum('status', ['pending', 'processing', 'done', 'failed']);
            $table->string('related_type')->nullable();
            $table->unsignedBigInteger('related_id')->nullable();
            $table->timestamps();

            $table->index(['related_type', 'related_id']);
            $table->index('status');
            $table->index('type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_tasks');
    }
};
