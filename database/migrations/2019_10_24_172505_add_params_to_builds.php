<?php

/*

	Here, I add the two new parameters needed. It is the identifier for the design type
	and the id for the instance that is related to this build.
	
*/


use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddParamsToBuilds extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('builds', function (Blueprint $table) {

            $table->bigInteger('design_type')->default(0);		// The numerical ID for the design type
            $table->bigInteger('instance_id')->default(0);		// The numerical ID for the instance

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('builds', function (Blueprint $table) {
            //
        });
    }
}
