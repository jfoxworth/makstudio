<?php

/*


	The designs table holds the overall data for each type of design. The instance represents
	a given instantiation of a model or design. A build is an iteration of a given instance.

	There can be multiple builds for each 

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
			$table->bigInteger('user_id');		// ID of user that stored the build
			$table->text('build_data');			// Content of build
			$table->string('build_id'); 		// Something to identify that build - bench, fin wall, etc
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
