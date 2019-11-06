<?php

namespace App\Listeners;

use App\Events\NewInstance;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Build;
use App\Instance;
use App\Action;
use Illuminate\Support\Facades\Auth;




class StoreNewInstanceAction
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
	 * @param  NewInstance  $event
	 * @return void
	 */
	public function handle(NewInstance $event)
	{


		$thisAction = new Action;
		$thisAction->design_type = $event->build->design_type;
		$thisAction->instance_id = $event->instance->id;
		$thisAction->user_id = Auth::id();
		$thisAction->action = 'New Instance Created';
		$thisAction->info = json_encode(array('build_id' => $event->build->id));
		$thisAction->save();

	}
}
