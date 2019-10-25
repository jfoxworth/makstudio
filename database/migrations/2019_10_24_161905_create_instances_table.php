<?php

/*

	The instance table will hold a single entry for each model that the user is building.

	"Model" is a reserved word and shouldn't be used. An instance is one time that a user
	creates an instance of a bench or a backlit wall. Each instance can haven as many builds
	as necessary and those builds can represent the various stages of the design.

*/

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstancesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('instances', function (Blueprint $table) {
			$table->bigIncrements('id');

			$table->bigInteger('design_type')->default(0);		// The numerical ID for the design type
			$table->bigInteger('user_id')->default(0);			// The numerical ID for the user that created the instance
			$table->bigInteger('stage')->default(0);			// The numerical value for the stage of the instance

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
		Schema::dropIfExists('instances');
	}
}
