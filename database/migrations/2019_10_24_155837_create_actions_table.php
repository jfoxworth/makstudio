<?php

/*

	Whenever a user does something that affects a build or instance, it is recorded here.
	This includes saving a change, moving the instance to a new phase or status, or anything
	else. This table serves as a catalog of actions that are taken on an instance.

*/

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActionsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('actions', function (Blueprint $table) {
			$table->bigIncrements('id');

			$table->bigInteger('design_type')->default(0);		// The numerical ID for the design type
			$table->bigInteger('user_id');						// ID of user that initiated the action
			$table->bigInteger('instance_id');					// ID of the instance that this is related to
			$table->text('action');								// Description of the action taken
			$table->text('info');								// Any additional info

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
		Schema::dropIfExists('actions');
	}
}
