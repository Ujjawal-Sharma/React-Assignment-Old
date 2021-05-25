<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableActive extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('active', function (Blueprint $table) {
            $table->biginteger('company_id')->unique();
            $table->index('company_id');
            $table->foreign('company_id')->references('phone')->on('logins')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('active');
        Schema::table('logins', function (Blueprint $table) {
            $table->dropForeign('company_id');
            $table->dropIndex('company_id');
            $table->dropColumn('company_id');
        });
    }
}
