<?php

/*

	The design table holds the data for the various designs that Mak Studio will be using.
	For example, there will be one entry for the bench, one for the backlit wall, etc.

	Each entry will hold the items necessary to create a new build for each instance.

*/


use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDesignsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('designs', function (Blueprint $table) {
			$table->bigIncrements('id');			// Numerical ID for this build

			$table->text('design_data');			// Content of the design. Used to build a new one
			$table->text('name');					// Simple moniker so that a reader knows what this model is ... "Bench" etc

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
		Schema::dropIfExists('designs');
	}
}
