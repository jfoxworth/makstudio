<?php

/*


    This is the model that houses previously built items for a 
    user. There will be one entry for each build.

*/

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuildsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('builds', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');             // ID of user that stored the build
            $table->text('build_data');         // Content of build
            $table->string('build_id');         // Something to identify that build - bench, fin wall, etc
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('builds');
    }
}
