<?php

namespace App\Listeners;

use App\Events\NewBuild;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Build;
use App\Instance;
use App\Action;
use Illuminate\Support\Facades\Auth;




class StoreNewBuildAction
{
	/**
	 * Create the event listener.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//
	}

	/**
	 * Handle the event.
	 *
	 * @param  NewBuild  $event
	 * @return void
	 */
	public function handle(NewBuild $event)
	{


		$thisAction = new Action;
		$thisAction->design_type = $event->build->design_type;
		$thisAction->instance_id = $event->build->instance_id;
		$thisAction->user_id = Auth::id();
		$thisAction->action = 'New Build Created';
		$thisAction->info = json_encode(array('build_id' => $event->build->id));
		$thisAction->save();


	}
}

