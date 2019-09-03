<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_roles', function (Blueprint $table) {

			$table->bigInteger('user_id')->unsigned();
			$table->bigInteger('role_id')->unsigned();

            //FOREIGN KEY CONSTRAINTS
        	$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        	$table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');

            //SETTING THE PRIMARY KEYS
        	$table->primary(['user_id','role_id']);

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
        Schema::dropIfExists('users_roles');
    }



	protected function setKeysForSaveQuery(Builder $query)
    {
        $query
            ->where('pk_1', '=', $this->getAttribute('pk_1'))
            ->where('pk_2', '=', $this->getAttribute('pk_2'));
        return $query;
    }


}
